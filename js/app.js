// Hekmat Hamidi
// Assignment 5 + Final

// Handles heart click event
const like = () => {
  const hearts = document.querySelectorAll('#heart-icon');
  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      if (heart.className === 'fas fa-heart fa-2x') {
        heart.className = 'far fa-heart fa-2x';
        heart.id = 'heart-icon';
        heart.style.color = 'grey';
      } else {
        heart.className = 'fas fa-heart fa-2x';
        heart.style.color = '#fe4164';
        heart.id = 'heart-icon';
      }
    });
  });
};

// Modal

const modal = () => {
  const productImg = document.querySelectorAll('#product-img');
  productImg.forEach(product => {
    product.addEventListener('click', () => {
      // creaate modal (working on the feature)
    });
  });
};

// Navslider
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    // Burger animation
    //document.body.classList.toggle('scroll-off')
    burger.classList.toggle('toggle');
    burger.classList.toggle('burger-fixed');
  });
};

// Creates products div
const createProduct = () => {
  const prod = window.products;
  const productsDiv = document.querySelector('.products');
  prod.forEach(product => {
    let productDiv = document.createElement('div');
    productDiv.id = product.name;
    let productImg = document.createElement('img');
    productImg.id = 'product-img';
    productImg.src = product.img;
    productImg.alt = product.name;
    productDiv.appendChild(productImg);
    let productDetails = document.createElement('div');
    productDetails.className = 'product-details';
    let productName = document.createElement('p');
    productName.innerHTML = product.name;
    productDetails.appendChild(productName);
    let heartIcon = document.createElement('i');
    heartIcon.id = 'heart-icon';
    heartIcon.className = 'far fa-heart fa-2x';
    productDetails.appendChild(heartIcon);
    let productPrice = document.createElement('p');
    productPrice.innerHTML = product.price;
    productDetails.appendChild(productPrice);
    productDiv.appendChild(productDetails);
    productsDiv.appendChild(productDiv);
  });
};

window.onload = () => {
  navSlide();
  createProduct();
  like();
  modal();
};
