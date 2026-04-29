const SUPABASE_URL = 'https://xsgjttyrxhwmtxlvbdoa.supabase.co';
const SUPABASE_KEY = 'sb_publishable_9XOfZAQbRbU8_Yn46tueoA_g9fqESrU';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/**
 * Exibe uma notificação temporária na tela.
 * @param {string} message - A mensagem a ser exibida.
 * @param {string} type - 'success' ou 'error'.
 */
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `alert alert-${type === 'success' ? 'success' : 'error'}`;
    toast.style.position = 'fixed';
    toast.style.top = '20px';
    toast.style.right = '20px';
    toast.style.zIndex = '9999';
    toast.style.minWidth = '300px';
    toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    toast.style.animation = 'slideIn 0.3s ease-out';
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Estilos de animação para o toast
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    @keyframes slideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(100%); opacity: 0; } }
`;
document.head.appendChild(style);

// Captura global de erros não tratados
window.addEventListener('unhandledrejection', event => {
    console.error('Erro não tratado:', event.reason);
    showToast('Erro de conexão ou sistema. Tente novamente.', 'error');
});

/**
 * Configura o menu de navegação dinamicamente com base no perfil do usuário.
 * @param {Object} profile - O perfil do usuário vindo do banco.
 * @param {string} activePage - O nome do arquivo da página atual (ex: 'dashboard.html').
 */
function setupNav(profile, activePage) {
    const nav = document.getElementById('nav-links');
    if (!nav) return;

    let navHtml = `
        <a href="dashboard.html" class="nav-item ${activePage === 'dashboard.html' ? 'active' : ''}"><i class="fas fa-home"></i><span>Início</span></a>
        <a href="crm_dashboard.html" class="nav-item ${activePage === 'crm_dashboard.html' ? 'active' : ''}"><i class="fas fa-chart-pie"></i><span>Gestão 360</span></a>
        <a href="vendas.html" class="nav-item ${activePage === 'vendas.html' ? 'active' : ''}"><i class="fas fa-shopping-cart"></i><span>Vendas</span></a>
    `;

    if (profile.role === 'admin' || profile.role === 'superadmin') {
        navHtml += `
            <a href="videos.html" class="nav-item ${activePage === 'videos.html' ? 'active' : ''}"><i class="fas fa-play-circle"></i><span>Vídeos</span></a>
            <a href="parcerias.html" class="nav-item ${activePage === 'parcerias.html' ? 'active' : ''}"><i class="fas fa-handshake"></i><span>Parcerias</span></a>
            <a href="alunos.html" class="nav-item ${activePage === 'alunos.html' ? 'active' : ''}"><i class="fas fa-users"></i><span>Alunos</span></a>
            <a href="leads_admin.html" class="nav-item ${activePage === 'leads_admin.html' ? 'active' : ''}"><i class="fas fa-filter"></i><span>Leads</span></a>
            <a href="configuracoes.html" class="nav-item ${activePage === 'configuracoes.html' ? 'active' : ''}"><i class="fas fa-cog"></i><span>Ajustes</span></a>
        `;
    } else {
        navHtml += `
            <a href="relatorio.html" class="nav-item ${activePage === 'relatorio.html' ? 'active' : ''}"><i class="fas fa-chart-line"></i><span>Evolução</span></a>
            <a href="configuracoes.html" class="nav-item ${activePage === 'configuracoes.html' ? 'active' : ''}"><i class="fas fa-cog"></i><span>Ajustes</span></a>
        `;
    }

    navHtml += `<a href="#" class="nav-item" onclick="handleLogout()" style="margin-top:auto; color:#ef4444;"><i class="fas fa-sign-out-alt"></i><span>Sair</span></a>`;
    nav.innerHTML = navHtml;
}

/**
 * Realiza o logout do usuário e redireciona para a home.
 */
async function handleLogout() {
    await sb.auth.signOut();
    window.location.href = 'index.html';
}

/**
 * Verifica a sessão atual. Se não houver sessão, redireciona para o login.
 * @returns {Promise<Object>} A sessão do usuário.
 */
async function checkAuth() {
    try {
        const { data: { session }, error } = await sb.auth.getSession();
        if (error) throw error;

        if (!session && !window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('recuperar_senha.html') && !window.location.pathname.endsWith('resetar_senha.html')) {
            window.location.href = 'index.html';
            return null;
        }
        return session;
    } catch (err) {
        showToast('Falha na autenticação. Faça login novamente.', 'error');
        window.location.href = 'index.html';
        return null;
    }
}
