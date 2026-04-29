const SUPABASE_URL = 'https://xsgjttyrxhwmtxlvbdoa.supabase.co';
const SUPABASE_KEY = 'sb_publishable_9XOfZAQbRbU8_Yn46tueoA_g9fqESrU';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

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

        let profile = JSON.parse(sessionStorage.getItem('st_profile'));
        if (!profile || profile.id !== session.user.id) {
            const { data, error } = await sb.from('profiles').select('*').eq('id', session.user.id).single();
            if (error) return null;
            profile = data;
            sessionStorage.setItem('st_profile', JSON.stringify(profile));
        }

        this.profile = profile;
        if (pageId) this.setupUniversalNav(profile, pageId);
        return { session, profile };
    },

    setupUniversalNav(profile, activePage) {
        const header = document.querySelector('.navbar');
        if (!header) return;

        const links = [
            { name: 'INÍCIO', url: 'dashboard.html', icon: 'ph-house' },
            { name: 'GESTÃO 360', url: 'crm_dashboard.html', icon: 'ph-chart-pie' },
            { name: 'VENDAS', url: 'vendas.html', icon: 'ph-shopping-cart' }
        ];

        if (profile.role === 'admin' || profile.role === 'superadmin') {
            links.push({ name: 'ALUNOS', url: 'alunos.html', icon: 'ph-users' });
            links.push({ name: 'VÍDEOS', url: 'videos.html', icon: 'ph-play-circle' });
            links.push({ name: 'PARCERIAS', url: 'parcerias.html', icon: 'ph-handshake' });
        } else {
            links.push({ name: 'EVOLUÇÃO', url: 'relatorio.html', icon: 'ph-file-text' });
        }
        
        links.push({ name: 'AJUSTES', url: 'configuracoes.html', icon: 'ph-gear' });

        // Standardize Top Navbar (Logo + Desktop Links + Hamburger)
        header.innerHTML = `
            <a href="dashboard.html" class="nav-logo">SHAPE<span>TRACK</span></a>
            <div class="nav-links desktop-only">
                ${links.map(l => `<a href="${l.url}" class="nav-link ${activePage === l.url ? 'active' : ''}">${l.name}</a>`).join('')}
                <a href="#" onclick="App.logout()" class="nav-link" style="color: #ff4d4d;">SAIR</a>
            </div>
            <button class="menu-toggle mobile-only" onclick="App.toggleMobileMenu()">
                <i class="ph-bold ph-list"></i>
            </button>
        `;

        // Inject Mobile Fullscreen Menu
        let mobileMenu = document.getElementById('mobile-menu-overlay');
        if (!mobileMenu) {
            mobileMenu = document.createElement('div');
            mobileMenu.id = 'mobile-menu-overlay';
            mobileMenu.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(5, 8, 7, 0.98); backdrop-filter: blur(20px);
                z-index: 9999; display: none; flex-direction: column;
                align-items: center; justify-content: center; gap: 24px;
                opacity: 0; transition: 0.4s cubic-bezier(0.32, 0.72, 0, 1);
            `;
            document.body.appendChild(mobileMenu);
        }

        mobileMenu.innerHTML = `
            <button onclick="App.toggleMobileMenu()" style="position: absolute; top: 32px; right: 32px; background: none; border: none; color: #FFF; font-size: 2rem;">
                <i class="ph-bold ph-x"></i>
            </button>
            ${links.map(l => `<a href="${l.url}" style="font-size: 1.5rem; font-weight: 700; color: ${activePage === l.url ? 'var(--accent)' : '#FFF'};">${l.name}</a>`).join('')}
            <a href="#" onclick="App.logout()" style="font-size: 1.5rem; font-weight: 700; color: #ff4d4d; margin-top: 24px;">SAIR</a>
        `;

        // Standardize Bottom Nav (App Feel)
        let bottomNav = document.querySelector('.bottom-nav');
        if (!bottomNav) {
            bottomNav = document.createElement('div');
            bottomNav.className = 'bottom-nav';
            document.body.appendChild(bottomNav);
        }
        bottomNav.innerHTML = links.slice(0, 5).map(l => `
            <a href="${l.url}" class="bottom-nav-link ${activePage === l.url ? 'active' : ''}">
                <i class="ph-light ${l.icon}"></i>
                <span>${l.name.split(' ')[0]}</span>
            </a>
        `).join('');
    },

    toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu-overlay');
        const isVisible = menu.style.display === 'flex';
        if (isVisible) {
            menu.style.opacity = '0';
            setTimeout(() => menu.style.display = 'none', 400);
        } else {
            menu.style.display = 'flex';
            setTimeout(() => menu.style.opacity = '1', 10);
        }
    },

    logout() {
        sessionStorage.removeItem('st_profile');
        sb.auth.signOut().then(() => window.location.href = 'index.html');
    }
};

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'card-shell reveal';
    toast.style.cssText = `position: fixed; bottom: 24px; right: 24px; z-index: 10000; width: auto;`;
    toast.innerHTML = `
        <div class="card-core" style="padding: 16px 24px; display: flex; align-items: center; gap: 12px; background: #0A0C0B;">
            <i class="ph-bold ${type === 'success' ? 'ph-check-circle' : 'ph-warning-circle'}" style="color: ${type === 'success' ? 'var(--accent)' : '#ff4d4d'}; font-size: 1.2rem;"></i>
            <span style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase;">${message}</span>
        </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 600);
    }, 3000);
}
