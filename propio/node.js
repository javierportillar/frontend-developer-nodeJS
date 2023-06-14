const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector("#productDetail");
const ceProductDetail = document.querySelector(".product-detail-closed");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
ceProductDetail.addEventListener("click", cerrarProductDetail);



let productList = [];
productList.push({
  name: "Bicicleta",
  price: "120",
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Carro",
  price: "240M",
  image:
    "https://www.bmw.com.co/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1674651825572.jpg",
});

productList.push({
  name: "Moto",
  price: "80M",
  image:
    "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2020/02/R1-2022-02.jpg",
});

function toggleDesktopMenu() {
  shoppingCartContainer.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  shoppingCartContainer.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  mobileMenu.classList.add("inactive");
  shoppingCartContainer.classList.toggle("inactive");
  productDetail.classList.add("inactive");
}

function abrirProductDetail() {
  desktopMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetail.classList.remove("inactive");

 // renderProductDetail(productList);
}
function cerrarProductDetail() {

  console.log("HEY")
  productDetail.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
}




function renderProductDetail(arr) {

  
  for (productDetailed of arr) {

    // console.log(productDetailed.name + "|" + productDetailed.price + "|" + productDetailed.image);

    // const productDetailClosed = document.createElement("div");
    // productDetailClosed.classList.add("product-detail-closed");

    // let imgProdcutDetailClose = document.createElement("img");
    // imgProdcutDetailClose.setAttribute("src", "./icons/icon_close.png");
    // imgProdcutDetailClose.setAttribute("alt", "close");

    // productDetailClosed.appendChild(imgProdcutDetailClose);

    // let imgProdcutDetail = document.createElement("img");
    // imgProdcutDetail.setAttribute("src", productDetailed.image);
    // imgProdcutDetail.setAttribute("alt", productDetailed.name);

    // let productInfoDetail = document.createElement("div");

    // let productPriced = document.createElement("p");
    // productPriced.innerText = `$${productDetail.price}`;

    // let productNamed = document.createElement("p");
    // productNamed.innerText = productDetailed.name;


    // productInfoDetail.appendChild(productPriced);
    // productInfoDetail.appendChild(productNamed);

    // let desProdcutInfo = document.createElement("p")
    // desProdcutInfo.innerText = `DESCRIPCIÓN.`

    // productInfoDetail.appendChild(desProdcutInfo);

    // let primaryButton = document.createElement("button");
    // primaryButton.classList.add("primary-buttond","add-to-cart-buttond");

    // let imgCarr = document.createElement("img");
    // imgCarr.setAttribute("src","./icons/bt_add_to_cart.svg");
    // imgCarr.setAttribute("alt","add to cart")

    // primaryButton.appendChild(imgCarr);
    // primaryButton.innerText=`Add to Cart`;
    
    // productInfoDetail.appendChild(primaryButton);
  }
  /* 
   <div class="product-detail-closed">
      <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src="https://images.pexels.s&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
    <div class="product-infod">
      <p>$35,00</p>
      <p>Bike</p>
      <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
      <button class="primary-buttond add-to-cart-buttond">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
      </button>
    </div>
  */
}

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // product= {name, price, image} -> product.image
    let productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    //Evento de imagen
    productImg.addEventListener("click", abrirProductDetail);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = `$${product.price}`;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
  /* div class="product-card">
        <img src="https://images.pexels.com/photostinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>

  */
}

renderProducts(productList);
