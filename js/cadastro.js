const urlApi = "https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com/";

async function cadastrarUsuario(event) {
  event.preventDefault();
  console.log("Iniciar Cadastro");

  const emailUsuario = document.getElementById('email').value.trim();
  const senhaUsuario = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;

  if (emailUsuario.trim() === ""){
    alert("O campo email está vazio");
    return;
  }

  if (senhaUsuario.trim() === ""){
    alert("O campo senha está vazio");
    return;
  }

  if (confirmarSenha.trim() === ""){
    alert("O campo confirmar senha está vazio");
    return;
  }

  if (senhaUsuario !== confirmarSenha) {
    alert("As senhas são diferentes");
    return;
  }

  const usuario = {
    email: emailUsuario,
    password: senhaUsuario,
    confirmedPassword: confirmarSenha
  };

  try {
    const response = await fetch(urlApi + 'v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    });

    if (!response.ok) {
      throw new Error('Erro ao cadastrar usuário');
    }

    const data = await response.json();
    console.log('Usuário cadastrado:', data);
    history.pushState(null, null, 'home.html');
  } catch (error) {
    console.error(error)
  }

  window.location.href = 'home.html'; //DIRECIONA PARA TELA DE INICIO
}

document.addEventListener('DOMContentLoaded', () => {
  const registerButton = document.querySelector('#register');
  if (registerButton) {
    registerButton.addEventListener('click', cadastrarUsuario);
  }
});
