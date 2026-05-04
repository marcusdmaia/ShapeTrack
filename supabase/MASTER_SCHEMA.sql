-- SHAPETRACK MASTER SCHEMA v3.9.8
-- Execute este script no SQL Editor do seu Supabase para garantir 100% de paridade.

---------------------------------------------------------
-- 1. EXTENSÕES & CONFIGURAÇÃO
---------------------------------------------------------
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

---------------------------------------------------------
-- 2. TABELA: profiles
---------------------------------------------------------
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    email TEXT,
    whatsapp TEXT,
    phone TEXT,
    birthday DATE,
    height FLOAT,
    gender TEXT DEFAULT 'masculino',
    goal TEXT DEFAULT 'perda',
    role TEXT DEFAULT 'client', -- 'mentor' ou 'client'
    mentor_id UUID REFERENCES profiles(id),
    is_active BOOLEAN DEFAULT true,
    business_presented BOOLEAN DEFAULT false,
    notes TEXT,
    target_weight FLOAT,
    next_assessment_date DATE,
    discount_level INTEGER DEFAULT 0,
    google_refresh_token TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. POLÍTICAS RLS (Row Level Security)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Perfil visível para o próprio usuário" 
ON profiles FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Mentores podem ver seus alunos" 
ON profiles FOR SELECT USING (auth.uid() = mentor_id);

CREATE POLICY "Mentores podem gerenciar seus alunos" 
ON profiles FOR ALL USING (auth.uid() = mentor_id);

CREATE POLICY "Usuários podem atualizar seu próprio perfil" 
ON profiles FOR UPDATE USING (auth.uid() = id);

-- NOTA: Inserção é gerenciada via TRIGGER SECURITY DEFINER no Auth

---------------------------------------------------------
-- 3. TABELA: assessments (Bioimpedância)
---------------------------------------------------------
CREATE TABLE IF NOT EXISTS assessments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    mentor_id UUID REFERENCES profiles(id),
    weight FLOAT NOT NULL,
    muscle_percentage FLOAT,
    body_fat JSONB, -- Suporta fat_percentage ou valor direto
    measurements JSONB, -- {waist: 80, abdomen: 90, ...}
    imc FLOAT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Clientes veem suas próprias avaliações" 
ON assessments FOR SELECT USING (auth.uid() = client_id);

CREATE POLICY "Mentores gerenciam avaliações de seus alunos" 
ON assessments FOR ALL USING (auth.uid() = mentor_id);

---------------------------------------------------------
-- 4. TABELA: sales (Vendas)
---------------------------------------------------------
CREATE TABLE IF NOT EXISTS sales (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    mentor_id UUID REFERENCES profiles(id),
    total_price FLOAT DEFAULT 0,
    total_pv FLOAT DEFAULT 0,
    payment_status TEXT DEFAULT 'Pago', -- 'Pago', 'Parcial', 'Pendente'
    amount_paid FLOAT DEFAULT 0,
    due_date DATE,
    discount_level TEXT,
    items JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE sales ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Mentores gerenciam suas vendas" 
ON sales FOR ALL USING (auth.uid() = mentor_id);

---------------------------------------------------------
-- 5. TABELA: inventory (Estoque)
---------------------------------------------------------
CREATE TABLE IF NOT EXISTS inventory (
    mentor_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    sku TEXT NOT NULL,
    product_name TEXT,
    quantity INTEGER DEFAULT 0,
    min_threshold INTEGER DEFAULT 3,
    PRIMARY KEY (mentor_id, sku)
);

ALTER TABLE inventory ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Mentores gerenciam seu estoque" 
ON inventory FOR ALL USING (auth.uid() = mentor_id);

---------------------------------------------------------
-- 6. TABELA: loans (Empréstimos)
---------------------------------------------------------
CREATE TABLE IF NOT EXISTS loans (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    mentor_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    borrower_name TEXT,
    sku TEXT,
    product_name TEXT,
    quantity INTEGER DEFAULT 1,
    borrow_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status TEXT DEFAULT 'borrowed', -- 'borrowed', 'returned'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE loans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Mentores gerenciam seus empréstimos" 
ON loans FOR ALL USING (auth.uid() = mentor_id);

---------------------------------------------------------
-- 7. TABELA: leads (Captura Funil)
---------------------------------------------------------
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    mentor_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    full_name TEXT,
    whatsapp TEXT,
    goal TEXT,
    calculated_data JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Qualquer um pode inserir lead (Funil)" 
ON leads FOR INSERT WITH CHECK (true);

CREATE POLICY "Mentores veem seus leads" 
ON leads FOR SELECT USING (auth.uid() = mentor_id);

CREATE POLICY "Mentores excluem seus leads" 
ON leads FOR DELETE USING (auth.uid() = mentor_id);

---------------------------------------------------------
-- 8. TABELA: videos (Treinamentos)
---------------------------------------------------------
CREATE TABLE IF NOT EXISTS videos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    mentor_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    youtube_url TEXT NOT NULL,
    is_public_to_mentors BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Mentores gerenciam seus vídeos" 
ON videos FOR ALL USING (auth.uid() = mentor_id);

CREATE POLICY "Vídeos públicos visíveis para mentores" 
ON videos FOR SELECT USING (is_public_to_mentors = true OR auth.uid() = mentor_id);

---------------------------------------------------------
-- 9. TABELA: shared_videos (Parcerias)
---------------------------------------------------------
CREATE TABLE IF NOT EXISTS shared_videos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    video_id UUID REFERENCES videos(id) ON DELETE CASCADE,
    target_mentor_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE shared_videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Mentores gerenciam vídeos compartilhados" 
ON shared_videos FOR ALL USING (target_mentor_id = auth.uid());

---------------------------------------------------------
-- 10. TRIGGER: Sincronismo Auth -> Profile
---------------------------------------------------------
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (
    id, 
    full_name, 
    email, 
    role, 
    mentor_id, 
    discount_level,
    whatsapp,
    birthday,
    gender,
    height,
    goal,
    is_active
  )
  VALUES (
    new.id, 
    COALESCE(new.raw_user_meta_data->>'full_name', 'Novo Usuário'), 
    new.email,
    COALESCE(new.raw_user_meta_data->>'role', 'aluno'),
    CASE 
      WHEN new.raw_user_meta_data->>'mentor_id' IS NOT NULL 
      THEN (new.raw_user_meta_data->>'mentor_id')::uuid 
      ELSE NULL 
    END,
    COALESCE((new.raw_user_meta_data->>'discount_level')::int, 0),
    new.raw_user_meta_data->>'whatsapp',
    CASE 
      WHEN new.raw_user_meta_data->>'birthday' IS NOT NULL AND new.raw_user_meta_data->>'birthday' <> ''
      THEN (new.raw_user_meta_data->>'birthday')::date 
      ELSE NULL 
    END,
    new.raw_user_meta_data->>'gender',
    COALESCE((new.raw_user_meta_data->>'height')::float, 0),
    new.raw_user_meta_data->>'goal',
    true
  )
  ON CONFLICT (id) DO UPDATE SET
    full_name = EXCLUDED.full_name,
    role = EXCLUDED.role,
    mentor_id = EXCLUDED.mentor_id,
    discount_level = EXCLUDED.discount_level,
    whatsapp = EXCLUDED.whatsapp,
    birthday = EXCLUDED.birthday,
    gender = EXCLUDED.gender,
    height = EXCLUDED.height,
    goal = EXCLUDED.goal;
    
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Ativação do Trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
