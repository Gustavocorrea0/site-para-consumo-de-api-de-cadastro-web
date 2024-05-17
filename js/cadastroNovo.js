const urlApi = "https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com";

const cadastrarUsuario = async (email, password, confirmedPassword) => {
    alert('ok')
    
    try {
        const response = await fetch(urlApi + "/v1/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                confirmedPassword
            }),
        });

        if (!response.ok) {
            throw new Error('Erro ao cadastrar usuário');
        }

        alert("Usuário cadastrado com sucesso");
        window.location.href = 'home.html'; // DIRECIONA PARA TELA DE INICIO
        return response.json();
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error.message);
        throw error;
    }
};

const formularioCadastrarUsuario = async () => {
    
    const emailUsuario = document.getElementById('email').value.trim();
    const senhaUsuario = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    
    if (emailUsuario === "") {
        alert("O campo email não foi preenchido");
        return;
    }

    if (senhaUsuario === "") {
        alert("Senha inválida");
        return;
    }

    if (senhaUsuario !== confirmarSenha) {
        alert("As senhas devem ser iguais");
        return;
    }

    try {
        await cadastrarUsuario(emailUsuario, senhaUsuario, confirmarSenha);
    } catch (error) {
        alert(error);
        console.log(error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.querySelector('#register');
    if (registerButton) {
      registerButton.addEventListener('click', formularioCadastrarUsuario);
    }
});
