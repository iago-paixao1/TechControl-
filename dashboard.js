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
        localStorage.removeItem('usuarioLogado');
        window.location.href = 'login.html';
        break;
    }
  });
});

// carrega usuário logado e atualiza cards
function carregarDashboard() {
  const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
  document.getElementById('usuario-nome').textContent = usuario.nome;

  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

  // total de itens em estoque
  const totalItens = produtos.reduce((acc, p) => acc + Number(p.estoque), 0);
  document.getElementById('total-itens').textContent = totalItens;

  // valor total do estoque
  const valorTotal = produtos.reduce((acc, p) => acc + p.estoque * p.valor, 0);
  document.getElementById('valor-total').textContent =
    valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  // quantidade de produtos cadastrados
  document.getElementById('qtd-cadastrados').textContent = produtos.length;
}

document.addEventListener('DOMContentLoaded', carregarDashboard);
