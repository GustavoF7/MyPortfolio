const navbarLinks = document.querySelectorAll('.agradecimento__link');
const tiktokIcon = document.getElementById('icon-ttk');
const shortsIcon = document.getElementById('icon-shorts');

navbarLinks.forEach(navbarLink => {
  const navbarText = navbarLink.querySelector('.agradecimento__link-text');
  const navbarIcon = navbarLink.querySelector('.agradecimento__img');
  const navbarIconImg = navbarLink.querySelector('.agradecimento__link-icon');

  navbarLink.addEventListener('mouseenter', () => {
    navbarText.style.width = '150px';
    navbarText.style.opacity = '1';
    navbarIcon.style.transform = 'translateX(0px)';
    navbarIcon.style.boxShadow = '0 0 10px var(--contraste)';
    
    if (navbarIconImg === tiktokIcon) {
      navbarIconImg.src = './img/icon-tiktok-2.png';
    } else if (navbarIconImg === shortsIcon) {
      navbarIconImg.src = './img/icon-shorts-2.png';
    }
  });

  navbarLink.addEventListener('mouseleave', () => {
    navbarText.style.width = '0';
    navbarText.style.opacity = '0';
    navbarIcon.style.transform = 'translateX(50px)';
    
    if (navbarIconImg === tiktokIcon) {
      navbarIconImg.src = './img/icon-tiktok-1.png';
    } else if (navbarIconImg === shortsIcon) {
      navbarIconImg.src = './img/icon-shorts-1.png';
    }
  });
});
