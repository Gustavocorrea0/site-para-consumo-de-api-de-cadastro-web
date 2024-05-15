const urlApi = "https://api-umfg-programacao-iv-2024-291d5e9a4gc4.herokuapp.com/swagger/index.html";

function cadastrarUsuario() {
    alert("Iniciar Cadastro")
    
    const nomeUsuario = document.getElementById('nome').value;
    const emailUsuario = document.getElementById('email').value;
    const senhaUsuario = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    
    const usuario = {
        nome: nomeUsuario,
        email: emailUsuario,
        senha: senhaUsuario,
        confirmarSenha: confirmarSenha
    }

    if (senhaUsuario === confirmarSenha){
        fetch(urlApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao cadastrar usuário');
                }
                return response.json();
            })
            .then(data => {
                console.log('Usuário cadastrado:', data);
                window.location.href = 'home.html';
                history.pushState(null, null, 'home.html'); //ACESSAR TELA HOME
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    } else {
        alert("As senhas são diferentes")
    }
}

const api = "https://api-umfg-programacao-iv-2024-291d5e9a4gc4.herokuapp.com/swagger/index.html";

document.addEventListener('DOMContentLoaded', () => {
    const regiterButton = document.querySelector('#register');
    if (regiterButton) {
        regiterButton.addEventListener('click', cadastrarUsuario)
    }
})
