// configura menu e cabeçalho
function initTopo() {
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  document.getElementById('usuario-nome').textContent = usuario.nome;
  document.querySelectorAll('.item-menu').forEach(item => {
    item.addEventListener('click', () => {
      switch (item.id) {
        case 'menu-dashboard': window.location.href = 'dashboard.html';
          break;
        case 'menu-lista': window.location.href = 'lista-produto.html';
          break;
        case 'menu-cadastro-produto':
          break;
        case 'menu-cadastro-usuario': window.location.href = 'cadastro-usuario.html';
          break;
        case 'menu-sair':
          localStorage.removeItem('usuarioLogado');
          window.location.href = 'login.html';
      }
    });
  });
}

// carrega formulário para novo ou edição
function carregarFormulario() {
  const indice = localStorage.getItem('indiceEditar');
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  if (indice !== null) {
    const p = produtos[indice];
    document.getElementById('codigo').value = p.codigo;
    document.getElementById('descricao').value = p.descricao;
    document.getElementById('estoque').value = p.estoque;
    document.getElementById('valor').value = p.valor;
    document.getElementById('categoria').value = p.categoria;
  }
}

// salva ou atualiza produto
document.getElementById('form-produto').addEventListener('submit', function (e) {
  e.preventDefault();
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  const dados = {
    codigo: Number(document.getElementById('codigo').value),
    descricao: document.getElementById('descricao').value.trim(),
    estoque: Number(document.getElementById('estoque').value),
    valor: Number(document.getElementById('valor').value),
    categoria: document.getElementById('categoria').value
  };

  const indice = localStorage.getItem('indiceEditar');
  if (indice !== null) {
    // atualização
    produtos[indice] = dados;
    localStorage.removeItem('indiceEditar');
  } else {
    // novo produto
    produtos.push(dados);
  }

  localStorage.setItem('produtos', JSON.stringify(produtos));
  window.location.href = 'lista-produto.html';
});

// cancelar volta para lista
document.getElementById('btn-cancelar').addEventListener('click', () => {
  window.location.href = localStorage.getItem('indiceEditar') !== null
    ? 'lista-produto.html'
    : 'lista-produto.html';
});

document.addEventListener('DOMContentLoaded', () => {
  initTopo();
  carregarFormulario();
});
