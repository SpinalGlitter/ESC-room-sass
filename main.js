const hamburger = document.querySelector('.hamburger__pic');
const closeBtn = document.querySelector('.close');
const menu = document.querySelector('.menu__container');

//show menu when clicking on hamburger icon
hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
  hamburger.style.display = 'none';
  document.body.style.overflow = 'hidden';
});
//close menu when clicking on close button
closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  hamburger.style.display = 'block';
  document.body.style.overflow = 'auto';
});
