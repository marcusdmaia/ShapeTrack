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
    // 1. Desktop Navbar Generation/Sync
    let navbar = document.querySelector('.navbar');
    if (!navbar) {
        navbar = document.createElement('nav');
        navbar.className = 'navbar reveal';
        document.body.prepend(navbar);
    }

    let links = [
        { name: 'INÍCIO', url: 'dashboard.html', icon: 'ph-house' },
        { name: 'GESTÃO 360', url: 'crm_dashboard.html', icon: 'ph-chart-pie' },
        { name: 'ESTOQUE', url: 'estoque.html', icon: 'ph-package' },
        { name: 'VENDAS', url: 'vendas.html', icon: 'ph-shopping-cart' }
    ];

    if (profile.role === 'admin' || profile.role === 'superadmin') {
        links = links.concat([
            { name: 'VÍDEOS', url: 'videos.html', icon: 'ph-play-circle' },
            { name: 'PARCERIAS', url: 'parcerias.html', icon: 'ph-handshake' },
            { name: 'ALUNOS', url: 'alunos.html', icon: 'ph-users' },
            { name: 'LEADS', url: 'leads_admin.html', icon: 'ph-radar' }
        ]);
    } else {
        links.push({ name: 'EVOLUÇÃO', url: 'relatorio.html', icon: 'ph-file-text' });
    }
    
    links.push({ name: 'CONFIGURAÇÕES', url: 'configuracoes.html', icon: 'ph-gear' });

    navbar.innerHTML = `
        <a href="dashboard.html" class="nav-logo">SHAPE<span>TRACK</span></a>
        <div class="nav-links">
            ${links.map(link => `
                <a href="${link.url}" class="nav-link ${activePage === link.url ? 'active' : ''}">
                    <i class="ph-light ${link.icon}"></i>
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
        <a href="${link.url}" class="bottom-nav-link ${activePage === link.url ? 'active' : ''}">
            <i class="ph-light ${link.icon}"></i>
            <span>${link.name.split(' ')[0]}</span>
        </a>
    `).join('') + `
        <a href="#" onclick="App.logout()" class="bottom-nav-link" style="color: #ff4d4d;">
            <i class="ph-light ph-sign-out"></i>
            <span>SAIR</span>
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
