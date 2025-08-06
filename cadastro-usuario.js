// cadastra novo usuário no localStorage


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
