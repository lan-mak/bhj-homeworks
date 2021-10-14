'use strict';

let list = document.querySelectorAll('.dropdown__value')
let item = document.querySelectorAll('.dropdown__link')

for (let item of list) {
  item.addEventListener('click', onСlick)
}

for (let link of item) {
  link.addEventListener('click', onLink)
}

function onСlick() {
  let openList = this.nextElementSibling
  if (openList.className === 'dropdown__list') {
    openList.className = 'dropdown__list dropdown__list_active'
  } else {
    openList.className = 'dropdown__list'
  }
}

function onLink(event) {
  event.preventDefault();
  let listValue = this.closest('.dropdown__list')
  let clickValue = event.target.textContent
  listValue.previousElementSibling.textContent = clickValue

  if (listValue !== 'dropdown__list') {
    listValue.className = 'dropdown__list'
  }
}
