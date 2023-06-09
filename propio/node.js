var mail = document.querySelector('.navbar-email');
var menuMail = document.querySelector('.desktop-menu');
var menu = document.querySelector('.menu');
var menuMobile = document.querySelector('.mobile-menu');
var carrito = document.querySelector('.navbar-shopping-cart');
var carrdet = document.querySelector('.product-detail');

// CONTENEDOR DE ELEMENTOS
var contenedor = document.querySelector('.cards-container');

for (let i = 0; i < 7; i++) {   
    contenedor.innerHTML+= 
    ` <div class="product-card ${i}">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>`;
}

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