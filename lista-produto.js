// carrega usuário e configura menu
function configurarMenu() {
  const usuario = JSON.parse(localStorage.getItem('usuario'));//localStorage.getItem('usuarioLogado'));
  document.getElementById('usuario-nome').textContent = usuario.nome;
  document.querySelectorAll('.item-menu').forEach(item => {
    item.addEventListener('click', () => {
      switch(item.id) {
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
}

// renderiza a tabela de produtos
function renderizarTabela() {
  const corpo = document.getElementById('corpo-tabela');
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  corpo.innerHTML = '';

  produtos.forEach((p, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${p.codigo}</td>
      <td>${p.descricao}</td>
      <td>${p.estoque}</td>
      <td>${p.valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</td>
      <td>${p.categoria}</td>
      <td>
        <button class="botao-acao" onclick="editar(${idx})">Editar</button>
        <button class="botao-acao" onclick="excluir(${idx})">Excluir</button>
        <button class="botao-acao" onclick="vender(${idx})">Vender</button>
        <button class="botao-acao" onclick="comprar(${idx})">Comprar</button>
      </td>`;
    corpo.appendChild(tr);
  });
}

// funções de ação
function editar(i) {
  // guarda índice e redireciona para edição
  localStorage.setItem('indiceEditar', i);
  window.location.href = 'cadastro-produto.html';
}

function excluir(i) {
  if (confirm('Confirma exclusão?')) {
    const produtos = JSON.parse(localStorage.getItem('produtos'));
    produtos.splice(i,1);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    renderizarTabela();
  }
}

function vender(i) {
  const produtos = JSON.parse(localStorage.getItem('produtos'));
  if (produtos[i].estoque > 0) produtos[i].estoque--;
  localStorage.setItem('produtos', JSON.stringify(produtos));
  renderizarTabela();
}

function comprar(i) {
  const produtos = JSON.parse(localStorage.getItem('produtos'));
  produtos[i].estoque++;
  localStorage.setItem('produtos', JSON.stringify(produtos));
  renderizarTabela();
}

// botão Novo
document.getElementById('btn-novo').addEventListener('click', () => {
  localStorage.removeItem('indiceEditar');
  window.location.href = 'cadastro-produto.html';
});

document.addEventListener('DOMContentLoaded', () => {
  configurarMenu();
  renderizarTabela();
});
