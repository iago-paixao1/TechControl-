
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
