const urlApi = "https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com/v1/signup";

async function cadastrarUsuario(event) {
  event.preventDefault();
  console.log("Iniciar Cadastro");

  const emailUsuario = document.getElementById('email').value.trim();
  const senhaUsuario = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;

  if (emailUsuario === "") {
    alert("O campo email está vazio");
    return;
  }

  if (senhaUsuario === "") {
    alert("O campo senha está vazio");
    return;
  }

  if (confirmarSenha === "") {
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

  console.log('Dados do usuário:', JSON.stringify(usuario));

  try {
    const response = await fetch(urlApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    });

    if (!response.ok) {
      let errorMessage = 'Erro ao cadastrar usuário';
      try {
        const errorData = await response.json();
        console.log('Resposta do servidor:', errorData);
        errorMessage = errorData.message || errorMessage;
      } catch (jsonError) {
        const errorText = await response.json();
        console.log('Erro ao parsear JSON:', errorText);
        errorMessage = errorText || errorMessage;
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    console.log('Usuário cadastrado:', data);
    history.pushState(null, null, 'home.html');
    window.location.href = 'home.html'; // DIRECIONA PARA TELA DE INICIO
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao cadastrar usuário: ' + error.message);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const registerButton = document.querySelector('#register');
  if (registerButton) {
    registerButton.addEventListener('click', cadastrarUsuario);
  }
});
