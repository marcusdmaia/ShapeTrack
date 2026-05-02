# Requisitos de Estabilização

Este documento detalha os critérios de aceitação para que o projeto seja considerado "100% Estabilizado".

## 1. UI & Layout (Mobile-First)
- **R1.1: Zero Overflow Horizontal**: Nenhuma página deve apresentar barra de rolagem lateral ou corte de conteúdo em telas de até 360px de largura.
- **R1.2: Bento Grid Consistency**: Todos os cartões de dados devem usar o sistema `span-12` em mobile, com padding de 15px-20px nas laterais.
- **R1.3: Visual Polish**: Verificação de contraste de cores, arredondamento de bordas (glassmorphism) e alinhamento de ícones.

## 2. Integridade de Dados
- **R2.1: Lead Sync**: Garantir que o formulário de leads em `leads.html` captura todos os campos e salva no Supabase sem erros de CORS ou Schema.
- **R2.2: Sales Persistence**: Verificar se o lançamento de vendas reflete instantaneamente no dashboard de faturamento.
- **R2.3: Error Handling**: Implementar feedbacks visuais claros (toasts ou modais) para erros de rede ou falha de salvamento.

## 3. Performance
- **R3.1: LCP Optimization**: O maior elemento de conteúdo (LCP) deve carregar em menos de 1.5s.
- **R3.2: Image Optimization**: Substituir `img/*.png` por versões WebP comprimidas sem perda de qualidade visível.

## 4. Segurança
- **R4.1: RLS Verification**: Testar se um mentor A consegue acessar dados do mentor B (deve ser impossível).
- **R4.2: Auth Session Integrity**: Garantir que o logout limpa o estado local e redireciona corretamente.

---
*Critério de Conclusão: Auditoria manual em todos os requisitos concluída com sucesso.*
