const open_menu = document.querySelector('.fa-bars-staggered');
const close_menu = document.querySelector('.fa-xmark');
const nav_active = document.querySelectorAll('.navbar');

open_menu.addEventListener('click', () => {
  nav_active.forEach((elem) => elem.classList.add('active'));
});

close_menu.addEventListener('click', () => {
  nav_active.forEach((elem) => elem.classList.remove('active'));
});
