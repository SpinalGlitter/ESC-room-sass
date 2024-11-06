 const hamburger = document.querySelector('.hamburger__pic');
 const closeBtn = document.querySelector('.close');
 const menu = document.querySelector('.menu__container');
 const body = document.body;

 hamburger.addEventListener('click', ()=> {
    menu.style.display = 'block';
    hamburger.style.display = 'none';
    body.style.position = 'fixed';
 }
);
closeBtn.addEventListener('click', ()=> {
    menu.style.display = 'none';
    hamburger.style.display = 'block';
    body.style.position = 'unset';
 }
);
