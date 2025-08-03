(function inicializarUsuarios() {
  if (!localStorage.getItem('usuarios')) {
    const usuarios = [
      { nome: 'Iago', email: 'iago@paixao.com', senha: '1234+' }
    ];
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }
})();


// ao clicar em Entrar, valida credenciais
document.getElementById('btn-login').addEventListener('click', function () {
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;

  if (!email || !senha) {
    alert('Por favor, preencha email e senha.');
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem('usuarios'));
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (usuario) {
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    window.location.href = 'dashboard.html';
  } else {
    alert('Email ou senha inválidos.');
  }
});

