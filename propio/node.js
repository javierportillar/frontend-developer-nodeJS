var mail = document.querySelector('.navbar-email');
var menuMail = document.querySelector('.desktop-menu');
var menu = document.querySelector('.menu');
var menuMobile = document.querySelector('.mobile-menu');
var carrito = document.querySelector('.navbar-shopping-cart');
var carrdet = document.querySelector('.product-detail');

mail.addEventListener('click', aparydesapd);
menu.addEventListener('click', aparydesapm);
carrito.addEventListener('click', aparydesapcar);

 function aparydesapd(){ 
    menuMail.classList.toggle('inactive');
    var verCarroCerrado = carrdet.classList.contains('inactive')
    if(!verCarroCerrado) carrdet.classList.add('inactive');
    console.log("eliminado");
}
    
function aparydesapm(){ 
    menuMobile.classList.toggle('inactive');
    carrdet.classList.add('inactive');
    console.log("eliminado mobile");
}

function aparydesapcar(){ 
    carrdet.classList.toggle('inactive');
    menuMobile.classList.add('inactive');
    var verMailCerrado = menuMail.classList.contains('inactive')

    if(!verMailCerrado){
        menuMail.classList.add('inactive')
    }
    
    console.log("Visualiza Carro");
}