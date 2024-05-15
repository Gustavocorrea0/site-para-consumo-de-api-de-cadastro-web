const api = "https://api-umfg-programacao-iv-2024-291d5e9a4gc4.herokuapp.com/swagger/index.html";

function executarLogin() {
    alert("Iniciar Login")
    const emailUsuario = document.getElementById("emailLogin").value;
    const senhaUsuario = document.getElementById("senhaLogin").value;

    const usuario = {
        emailLogin: emailUsuario,
        senhaLogin: senhaUsuario
    }

    fetch(`${api}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
        .then(response => {
            if (response.ok) {
                throw new Error('Erro ao fazer login')
            }
            return response.json();
        })
        .then(data => {
            console.log('Login bem-sucedido', data)
            window.location.href = 'home.html';
            history.pushState(null, null, 'home.html'); //ACESSAR TELA HOME
        })
        .catch(error => {
            console.error('Erro: ', error)
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('#access');
    if (loginButton) {
        loginButton.addEventListener('click', executarLogin)
    }
})
