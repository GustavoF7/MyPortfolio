var linksNavegacao = document.querySelectorAll('.cabecalho__link a');

function rolagemSuave(event) {
  event.preventDefault();

  var destino = this.getAttribute('href');
  var secaoDestino = document.querySelector(destino);

  window.scrollTo({
    top: secaoDestino.offsetTop,
    behavior: 'smooth'
  });
}

linksNavegacao.forEach(function (link) {
  link.addEventListener('click', rolagemSuave);
});



