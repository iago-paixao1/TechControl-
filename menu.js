// redireciona ao clicar no menu
document.querySelectorAll('.item-menu').forEach(item => {
  item.addEventListener('click', () => {
    const alvo = item.id;
    switch(alvo) {
      case 'menu-dashboard':
        window.location.href = 'dashboard.html';
        break;
      case 'menu-lista':
        window.location.href = 'lista-produto.html';
        break;
      case 'menu-cadastro-produto':
        window.location.href = 'cadastro-produto.html';
        break;
      case 'menu-cadastro-usuario':
        window.location.href = 'cadastro-usuario.html';
        break;
      case 'menu-sair':
        localStorage.removeItem('usuario');
        window.location.href = 'login.html';
        break;
    }
  });
});