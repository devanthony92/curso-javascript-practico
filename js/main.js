const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.menu');
const toggleMobile = document.querySelector('.mobile-menu');
const shopingCar = document.querySelector('.navbar-shopping-cart');
const shoppingDetails = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


navEmail.addEventListener('click', toggleDescktopMenu);
menuMobile.addEventListener('click', toggleMobileMenu);
shopingCar.addEventListener('click', toggleShoppingDetails);

function toggleDescktopMenu(){
    let isOpenshoppingDetails = shoppingDetails.classList.contains('inactive');
    
    if (!isOpenshoppingDetails){
        shoppingDetails.classList.add('inactive');  
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    let isOpenshoppingDetails = shoppingDetails.classList.contains('inactive');
    
    if (!isOpenshoppingDetails){
        shoppingDetails.classList.add('inactive');  
    }
    toggleMobile.classList.toggle('inactive');
}

function toggleShoppingDetails(){
    let isOpenMobileMenu = toggleMobile.classList.contains('inactive');
    let isOpenDesktopMenu = desktopMenu.classList.contains('inactive');
    if (!isOpenMobileMenu){
        toggleMobile.classList.add('inactive');  
    }
    if (!isOpenDesktopMenu){
        desktopMenu.classList.add('inactive');  
    }
    shoppingDetails.classList.toggle('inactive');
    

    
}

const productList = [];

productList.push({
    name: 'Pantalla',
    price: 220,
    image: "https://img01.huaweifile.com/sg/ms/co/pms/uomcdn/CO_HW_B2C/pms/202205/gbom/6941487214969/800_800_CBDC68A805677FB27A9CECFEC129C80Fmp.png",
});
productList.push({
    name: 'Computador',
    price: 1000,
    image: "https://d1zktoovjdma6n.cloudfront.net/media/catalog/product/cache/2868dafe2b4ec8474f3b444cfc8b532a/a/s/asusvivobook15_x1502za-bq242w_01.png",
});
productList.push({
    name: 'Celular',
    price: 540,
    image: "https://www.kalley.com.co/medias/7705946476478-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyMTYyODl8aW1hZ2UvanBlZ3xoZDcvaDRjLzEzNDMxMjEwNDQyNzgyLzc3MDU5NDY0NzY0NzhfMDAxXzc1MFd4NzUwSHxjYmFlZmVmMjViMjIwNTY4MzMyYWUyZjY5YWNiNDUzNjk2NjAzMGZmMGNlZjMwODdjNzc0OGE2ZmQyY2YxZjQz",
});

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const img = document.createElement('img');
    img.setAttribute('src',product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv =  document.createElement('div');
    
    const productPrice =  document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName =  document.createElement('p');
    productName.innerText = '$' + product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
    const productInfoFigure =  document.createElement('figure');
    const productInfoFigureImg = document.createElement('img');
    productInfoFigureImg.setAttribute('src','./icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild(productInfoFigureImg);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}