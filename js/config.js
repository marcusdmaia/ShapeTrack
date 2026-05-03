const SUPABASE_URL = 'https://xsgjttyrxhwmtxlvbdoa.supabase.co';
const SUPABASE_KEY = 'sb_publishable_9XOfZAQbRbU8_Yn46tueoA_g9fqESrU';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Global Application Object
const App = {
    profile: null,
    async init(pageId) {
        const { data: { session } } = await sb.auth.getSession();
        if (!session) {
            const isLoginPage = window.location.pathname === '/' || 
                               window.location.pathname.endsWith('index.html') || 
                               window.location.pathname.endsWith('recuperar_senha.html');
            
            if (!isLoginPage) {
                window.location.href = 'index.html';
            }
            return null;
        }

        // Try to get cached profile
        let profile = JSON.parse(sessionStorage.getItem('st_profile'));
        
        // Force refresh if profile is old (client/admin) or missing
        const isLegacyRole = profile && (profile.role === 'client' || profile.role === 'admin');
        
        if (!profile || profile.id !== session.user.id || isLegacyRole) {
            let { data, error } = await sb.from('profiles').select('*').eq('id', session.user.id).single();
            
            // Fallback 1: Find by whatsapp (manual registration)
            if (error || !data) {
                const { data: whatsappData } = await sb.from('profiles').select('*').eq('whatsapp', session.user.user_metadata?.whatsapp).is('id', null).single();
                if (whatsappData) {
                    const { data: updatedData } = await sb.from('profiles').update({ id: session.user.id }).eq('whatsapp', session.user.user_metadata?.whatsapp).select().single();
                    data = updatedData;
                }
            }

            // Fallback 2: Auto-create basic profile if trigger failed
            if (!data) {
                const { data: newData, error: createError } = await sb.from('profiles').insert([
                    { id: session.user.id, full_name: session.user.user_metadata?.full_name || 'Novo Usuário', role: 'aluno' }
                ]).select().single();
                if (!createError) data = newData;
            }

            profile = data;
            if (profile) sessionStorage.setItem('st_profile', JSON.stringify(profile));
        }

        if (!profile) {
            console.error('Critical: Profile not found after recovery attempts. Forcing logout to break loop.');
            sessionStorage.removeItem('st_profile');
            await sb.auth.signOut();
            if (!window.location.pathname.endsWith('index.html')) {
                window.location.href = 'index.html';
            }
            return null;
        }

        this.profile = profile;
        if (pageId) setupNav(profile, pageId);
        return { session, profile };
    }
};

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'card-shell reveal';
    toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 9999;
        width: auto;
    `;
    toast.innerHTML = `
        <div class="card-core" style="padding: 16px 24px; display: flex; align-items: center; gap: 12px; background: #FFFFFF; border: 1px solid ${type === 'success' ? 'var(--accent)' : '#ff4d4d'};">
            <i class="ph-fill ${type === 'success' ? 'ph-check-circle' : 'ph-warning-circle'}" style="color: ${type === 'success' ? 'var(--accent)' : '#ff4d4d'}; font-size: 1.2rem;"></i>
            <span style="font-size: 0.85rem; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: var(--text-primary);">${message}</span>
        </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

function setupNav(profile, activePage) {
    // 1. Define links based on role
    let links = [];
    
    if (profile.role === 'aluno') {
        links = [
            { name: 'MEU PROGRESSO', url: 'relatorio.html', icon: 'ph-chart-line' },
            { name: 'LOJA PREMIUM', url: 'loja.html', icon: 'ph-shopping-bag' },
            { name: 'CONTEÚDO', url: 'videos.html', icon: 'ph-play-circle' },
            { name: 'PERFIL', url: 'configuracoes.html', icon: 'ph-user-gear' }
        ];
    } else if (profile.role === 'mentor') {
        links = [
            { name: 'INÍCIO', url: 'dashboard.html', icon: 'ph-house' },
            { name: 'GESTÃO 360', url: 'crm_dashboard.html', icon: 'ph-users-three' },
            { name: 'VENDAS', url: 'vendas.html', icon: 'ph-shopping-cart' },
            { name: 'ALUNOS', url: 'alunos.html', icon: 'ph-student' },
            { name: 'ESTOQUE', url: 'estoque.html', icon: 'ph-package' },
            { name: 'VÍDEOS', url: 'videos.html', icon: 'ph-video-camera' },
            { name: 'PARCERIAS', url: 'parcerias.html', icon: 'ph-planet' },
            { name: 'LEADS', url: 'leads_admin.html', icon: 'ph-users-four' },
            { name: 'CONFIGURAÇÕES', url: 'configuracoes.html', icon: 'ph-gear' }
        ];
    }

    // 1. Desktop Navbar Generation/Sync
    let navbar = document.querySelector('.navbar');
    if (!navbar) {
        navbar = document.createElement('nav');
        navbar.className = 'navbar reveal';
        document.body.prepend(navbar);
    }

    navbar.innerHTML = `
        <a href="${profile.role === 'aluno' ? 'relatorio.html' : 'dashboard.html'}" class="nav-logo">SHAPE<span>TRACK</span></a>
        <div class="nav-links">
            ${links.map(link => `
                <a href="${link.url}" class="nav-link ${activePage === link.url ? 'active' : ''}">
                    <i class="${activePage === link.url ? 'ph-fill' : 'ph-light'} ${link.icon}"></i>
                    <span>${link.name}</span>
                </a>
            `).join('')}
            <div style="margin-top: auto; padding-top: 20px; border-top: 1px solid var(--glass-border);">
                <a href="#" onclick="App.logout()" class="nav-link" style="color: #ff4d4d;">
                    <i class="ph-light ph-sign-out"></i>
                    <span>SAIR DO SISTEMA</span>
                </a>
            </div>
        </div>
    `;

    // 2. Mobile Bottom Nav Generation/Sync
    let bottomNav = document.querySelector('.bottom-nav');
    if (!bottomNav) {
        bottomNav = document.createElement('div');
        bottomNav.className = 'bottom-nav';
        document.body.appendChild(bottomNav);
    }
    
    bottomNav.innerHTML = links.map(link => `
        <a href="${link.url}" class="bottom-nav-link ${activePage === link.url ? 'active' : ''}" title="${link.name}">
            <i class="${activePage === link.url ? 'ph-fill' : 'ph-light'} ${link.icon}"></i>
        </a>
    `).join('') + `
        <a href="#" onclick="App.logout()" class="bottom-nav-link" style="color: #ff4d4d;">
            <i class="ph-light ph-sign-out"></i>
        </a>
    `;
}

App.logout = () => {
    sessionStorage.removeItem('st_profile');
    sb.auth.signOut().then(() => window.location.href='index.html');
};

// 3. Reveal Observer for Premium Animations
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
        // Force immediate reveal if already in view or for critical elements
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('active');
        } else {
            observer.observe(el);
        }
    });
});
