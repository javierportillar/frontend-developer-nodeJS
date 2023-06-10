var mail = document.querySelector('.navbar-email');
var menuMail = document.querySelector('.desktop-menu');
var menu = document.querySelector('.menu');
var menuMobile = document.querySelector('.mobile-menu');
var carrito = document.querySelector('.navbar-shopping-cart');
var carrdet = document.querySelector('.product-detail');

// CONTENEDOR DE ELEMENTOS
var contenedor = document.querySelector('.cards-container');

var lista = [];
lista.push({
    nombre: 'Bicicleta',
    precio: '120',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

lista.push({
    nombre: 'Carro',
    precio: '240M',
    imagen: 'https://www.bmw.com.co/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1674651825572.jpg'
})

lista.push({
    nombre: 'Moto',
    precio: '80M',
    imagen: 'https://www.incolmotos-yamaha.com.co/wp-content/uploads/2020/02/R1-2022-02.jpg'
})


var iniciarRender=(lista)=>{
    var esribirHTML = (imagen,precio,nombres)=>{
        contenedor.innerHTML+= 
        ` <div class="product-card">
    <img src="${imagen}" alt="">
    <div class="product-info">
      <div>
        <p>$${precio}</p>
        <p>${nombres}</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
    </div>`;
    }
    let a;
   /*
    for (i = 0; i < lista.length; i++) {
        nombres=lista[i].nombre;
        precio=lista[i].precio;
        imagen=lista[i].imagen;
        esribirHTML(imagen,precio,nombres);

    }
    */
    for(objeto of lista){
        nombress=objeto.nombre;
        precios=objeto.precio;
        images=objeto.imagen;
        a =+ esribirHTML(images,precios,nombress);
    }

    return a
}

iniciarRender(lista);
iniciarRender(lista);



// INTERRUPCIONES, FUNCIONES Y SUS CONDICIONES GRÁFICAS

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
