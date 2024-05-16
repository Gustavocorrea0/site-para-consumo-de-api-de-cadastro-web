const urlApi = 'https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com/';

const loginUsuario = async (email, password) => {
    try {
        const response = await fetch(urlApi + 'v1/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            }),
        });

        if (!response.ok) {
            throw new Error('Erro ao realizar login');
        }

        const data = await response.json();
        alert("Login realizado com sucesso");
        console.log(data); 
        window.location.href = 'home.html'; // DIRECIONA PARA TELA DE INICIO
        return data;
    } catch (error) {
        console.error("Erro ao realizar login:", error.message);
        alert("Erro ao realizar login: " + error.message);
        throw error;
    }
};

const formularioLoginUsuario = async () => {
    const emailUsuario = document.getElementById("emailLogin").value;
    const senhaUsuario = document.getElementById("senhaLogin").value;

    if (emailUsuario === "") {
        alert("O campo email não foi preenchido");
        return;
    }

    if (senhaUsuario === "") {
        alert("Senha inválida");
        return;
    }

    try {
        await loginUsuario(emailUsuario, senhaUsuario);
    } catch (error) {
        console.error(error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('#access');
    if (loginButton) {
        loginButton.addEventListener('click', formularioLoginUsuario);
    }
});