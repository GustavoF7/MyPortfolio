const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');
const cabecalhoLinks = document.querySelectorAll('.cabecalho__link');
menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
        document.getElementById('icone-menu').style.backgroundImage = 'url(./img/close-menu.svg)';
        menu.style.animation = 'menuAnimation 0.3s ease';
        menu.style.display = 'flex';
        setTimeout(() => {
            cabecalhoLinks.forEach((link) => {
              link.style.opacity = '1';
            });
          }, 300);
          
    } else {
        document.getElementById('icone-menu').style.backgroundImage = 'url(./img/menu-hamburguer.svg)';
        menu.style.animation = 'menuReverseAnimation 0.3s ease';
        cabecalhoLinks.forEach((link) => {
            link.style.opacity = '0';
          });
        setTimeout(() => {
            menu.style.display = 'none';
        }, 300);
    }
});


