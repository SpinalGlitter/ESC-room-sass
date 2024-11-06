 const hamburger = document.querySelector('.hamburger__pic');
 const closeBtn = document.querySelector('.close');
 const menu = document.querySelector('.menu__container');
 const body = document.body;

 //show menu when clicking on hamburger icon
 hamburger.addEventListener('click', ()=> {
    menu.style.display = 'block';
    hamburger.style.display = 'none';
    body.style.position = 'fixed';//fix the page content to prevent scrolling
 }
);
//close menu when clicking on close button
closeBtn.addEventListener('click', ()=> {
    menu.style.display = 'none';
    hamburger.style.display = 'block';
    body.style.position = 'unset'; //restore scrolling on the page
 }
);
