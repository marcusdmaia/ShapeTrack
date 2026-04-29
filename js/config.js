const SUPABASE_URL = 'https://xsgjttyrxhwmtxlvbdoa.supabase.co';
const SUPABASE_KEY = 'sb_publishable_9XOfZAQbRbU8_Yn46tueoA_g9fqESrU';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Global Application Object
const App = {
    profile: null,
    async init(pageId) {
        const { data: { session } } = await sb.auth.getSession();
        if (!session) {
            if (!window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('recuperar_senha.html')) {
                window.location.href = 'index.html';
            }
            return null;
        }

        // Try to get cached profile
        let profile = JSON.parse(sessionStorage.getItem('st_profile'));
        if (!profile || profile.id !== session.user.id) {
            const { data, error } = await sb.from('profiles').select('*').eq('id', session.user.id).single();
            if (error) {
                console.error('Profile fetch error:', error);
                return null;
            }
            profile = data;
            sessionStorage.setItem('st_profile', JSON.stringify(profile));
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
        <div class="card-core" style="padding: 16px 24px; display: flex; align-items: center; gap: 12px; background: ${type === 'success' ? '#0A0C0B' : '#451010'};">
            <i class="ph-light ${type === 'success' ? 'ph-check-circle' : 'ph-warning-circle'}" style="color: ${type === 'success' ? 'var(--accent)' : '#ff4d4d'}; font-size: 1.2rem;"></i>
            <span style="font-size: 0.85rem; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;">${message}</span>
        </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

function setupNav(profile, activePage) {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let links = [
        { name: 'INÍCIO', url: 'dashboard.html' },
        { name: 'GESTÃO 360', url: 'crm_dashboard.html' },
        { name: 'VENDAS', url: 'vendas.html' }
    ];

    if (profile.role === 'admin' || profile.role === 'superadmin') {
        links = links.concat([
            { name: 'VÍDEOS', url: 'videos.html' },
            { name: 'PARCERIAS', url: 'parcerias.html' },
            { name: 'ALUNOS', url: 'alunos.html' },
            { name: 'LEADS', url: 'leads_admin.html' }
        ]);
    } else {
        links.push({ name: 'EVOLUÇÃO', url: 'relatorio.html' });
    }
    
    links.push({ name: 'AJUSTES', url: 'configuracoes.html' });

    let navLinks = document.getElementById('nav-links');
    if (!navLinks) {
        navLinks = document.createElement('div');
        navLinks.id = 'nav-links';
        navLinks.className = 'nav-links desktop-only';
        navbar.appendChild(navLinks);
    }

    navLinks.innerHTML = links.map(link => `
        <a href="${link.url}" class="nav-link ${activePage === link.url ? 'active' : ''}">
            ${link.name}
        </a>
    `).join('') + `
        <a href="#" onclick="sessionStorage.removeItem('st_profile'); sb.auth.signOut().then(() => window.location.href='index.html')" class="nav-link" style="color: #ff00ff;">SAIR</a>
    `;
}
