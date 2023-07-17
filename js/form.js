document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Obtenha os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    // Construa o corpo do email com os dados preenchidos
    var corpoemail = `Olá Gustavo, me chamo ${nome}, e venho conversar sobre ${assunto} através desse email... \n \n ${mensagem}`;

    // Use o serviço de envio de emails do Google para enviar o email
    window.location.href = "mailto:gustavofernandes.gfgn@hotmail.com?subject=" + encodeURIComponent(assunto) + "&body=" + encodeURIComponent(corpoemail);
});