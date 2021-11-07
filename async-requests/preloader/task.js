'use strict';

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let rate = JSON.parse(xhr.responseText);

    let currencyRate = document.querySelector('#items');
    while (currencyRate.firstChild) {
      currencyRate.removeChild(currencyRate.firstChild);
    }

    let updateRate = Object.entries(rate.response.Valute);
    updateRate.forEach(item => {
      let itemValute = document.createElement('div');
      itemValute.classList.add('item');
      itemValute.innerHTML = `
      <div class="item__code">${item[1].CharCode}</div>
      <div class="item__value">${item[1].Value}</div>
      <div class="item__currency">руб.</div>
      `;
      currencyRate.append(itemValute);
    })

    let loader = document.querySelector('#loader');
    loader.classList.remove('loader_active');
  }
});

xhr.send();
