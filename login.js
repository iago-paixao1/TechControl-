document
  .getElementById('botao-entrar')
  .addEventListener('click', () => {
    const email = document.getElementById('campo-email').value;
    const senha = document.getElementById('campo-senha').value;

    if (!email || !senha) {
      alert('Preencha email e senha');
      return;
    }

//    confirmar email
    if (email === 'iago@paixao.com' && senha === '1234+') {
      window.location.href = 'dashboard.html';
    } else {
      alert('Email ou senha inválidos');
    }
  });
