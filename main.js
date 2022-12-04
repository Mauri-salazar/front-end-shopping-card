const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetail = document.querySelector('.product-info');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

const productList = [];

function pushProducArray (arr) {
  for (let i = 0; i < 5; i++) {
    arr.push( {
      name: 'Yamaha YZ 125 2T',
      id: 1,
      price: 8000 + 'usd',
      model: 2018 ,
      image: './assets/Yamaha Yz 125 2T (1).jpeg',
    },{
      name: 'Yamaha YZ 250',
      price: 13000 + 'usd',
      id: 2,
      model: 2015,
      image: './assets/yamaha yz250.jpeg',
    },
    {
     name: 'Honda Crf 450',
     price: 15000 + 'usd',
     model: 2018,
     id: 3,
     image: './assets/Honda Crf 450R 2018.jpeg',
    },
    {
      name: 'Yamaha YZ 125 2T',
      price: 10000 + 'usd',
      id: 4 ,
      model: 2020,
      image: './assets/Yamaha Yz 125 2T.jpeg',
    });
  }
}

pushProducArray(productList);

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productModel = document.createElement('p');
    productModel.innerText = product.model;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productModel);
    productInfoDiv.appendChild(productName);


    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);



function renderDetail (arr) {
  for ( detailProduct of arr) {

    if(detailProduct.id === detailProduct.id ) {
    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', detailProduct.image );

    productDetail.appendChild(imgProduct);

    const price = document.createElement('p');
    price.innerText = detailProduct.price;

    productDetail.appendChild(price);}
  }
}

renderDetail(productList);