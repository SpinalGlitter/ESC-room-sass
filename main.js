 const hamburger = document.querySelector('.hamburger__pic');
 const closeBtn = document.querySelector('.close');
 const menu = document.querySelector('.menu__container');
 const body = document.body;

 //show menu when clicking on hamburger icon
 hamburger.addEventListener('click', ()=> {
    menu.style.display = 'block';
    hamburger.style.display = 'none';
 }
);
//close menu when clicking on close button
closeBtn.addEventListener('click', ()=> {
    menu.style.display = 'none';
    hamburger.style.display = 'block';
 }
);
