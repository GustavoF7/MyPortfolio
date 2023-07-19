document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;
    var corpoemail = `Olá Gustavo, me chamo ${nome}, e venho conversar sobre ${assunto} através desse email... \n \n ${mensagem}`;
    window.location.href = "mailto:gustavofernandes.gfgn@hotmail.com?subject=" + encodeURIComponent(assunto) + "&body=" + encodeURIComponent(corpoemail);

    setTimeout(() => {
        window.location.href = 'agradecimento.html'
    }, 3000);

});