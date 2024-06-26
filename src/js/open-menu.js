const openMenuBtn = document.querySelector('.promo__menu-icon');
const menuContainer = document.querySelector('.menu');
const menu = document.querySelector('.menu__navigation');
const overlay = document.querySelector('.overlay');

export const openMenu = () => {
  openMenuBtn.addEventListener('click', () => {
    openMenuBtn.classList.add('promo__menu-icon_hidden');
    menu.classList.add('menu__navigation_open');
    overlay.classList.add('overlay_visible');
  });
};

export const closeMenu = () => {
  menuContainer.addEventListener('click', (e) => {
    if (e.target !== menu && !e.target.matches('.menu__list')) {
      openMenuBtn.classList.remove('promo__menu-icon_hidden');
      menu.classList.remove('menu__navigation_open');
      overlay.classList.remove('overlay_visible');
    }
  });
};
