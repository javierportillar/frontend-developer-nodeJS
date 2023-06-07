var mail = document.querySelector('.navbar-email');
var menuMail = document.querySelector('.desktop-menu');
var menu = document.querySelector('.menu');
var menuMobile = document.querySelector('.mobile-menu');

mail.addEventListener('click', aparydesapd);
menu.addEventListener('click', aparydesapm);

 function aparydesapd(){ 
    menuMail.classList.toggle('inactive');
    console.log("eliminado");
}
    
function aparydesapm(){ 
    menuMobile.classList.toggle('inactive');
    console.log("eliminado mobile");
}