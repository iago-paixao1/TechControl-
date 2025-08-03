// cadastra novo usuário no localStorage

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
document.getElementById('btn-cadastrar').addEventListener('click', () => {
  const nome  = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;

  if (!nome || !email || !senha) {
    alert('Todos os campos devem ser preenchidos.');
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  if (usuarios.find(u => u.email === email)) {
    alert('Email já cadastrado.');
    return;
  }

  usuarios.push({ nome, email, senha });
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  alert('Usuário cadastrado com sucesso!');
  window.location.href = 'login.html';
});
