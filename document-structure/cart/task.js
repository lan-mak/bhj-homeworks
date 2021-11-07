'use strict';

let itemProduct = document.querySelectorAll('.product');
let cartProducts = document.querySelector('.cart__products');

itemProduct.forEach(item);

function item(elem) {
  elem.addEventListener('click', numberProducts);
  elem.addEventListener('click', addToCart);

  function numberProducts(event) {
    let valueProduct = this.querySelector('.product__quantity-value');

    if (event.target.classList.contains('product__quantity-control_inc')) {
      valueProduct.innerText = Number(valueProduct.innerText) + 1;
    } else if (event.target.classList.contains('product__quantity-control_dec') && +valueProduct.innerText > 0) {
      valueProduct.innerText = Number(valueProduct.innerText) - 1;
    }
  }

  function addToCart(event) {
    let count = this.querySelector('.product__quantity-value').innerText;
    let img = this.querySelector('.product__image').src;
    let id = this.dataset.id;

    let cartProduct = document.getElementsByClassName('cart__product');

    if (event.target.classList.contains('product__add') && count > 0 && cartProduct.length === 0) {
      createProduct();
    } else if (event.target.classList.contains('product__add') && count > 0 && !checkCart()) {
      createProduct();
    } else if (event.target.classList.contains('product__add') && count > 0 && checkCart()) {
      addCountProduct();
    }

    function checkCart() {
      for (let i of cartProduct) {
        if (i.dataset.id === id) {
          return true;
        }
      }
    }

    function addCountProduct() {
      for (let i of cartProduct) {
        if (i.dataset.id === id) {
          let countProduct = i.querySelector('.cart__product-count');
          countProduct.innerText = +countProduct.innerText + (+count);
        }
      }
    }

    function createProduct() {
      let item = document.createElement('div');
      item.classList.add('cart__product');
      item.dataset.id = id;
      item.innerHTML = `
      <img class="cart__product-image" src="${img}">
      <div class="cart__product-count">${count}</div>
      `;
      cartProducts.insertAdjacentElement('afterbegin', item);
    }
  }
}
