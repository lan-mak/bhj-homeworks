'use strict';

let modalMain = document.querySelector('#modal_main');
let modalSuccess = document.querySelector('#modal_success');
let showSuccess = document.querySelector('.show-success');

let closeElem = document.querySelectorAll('.modal__close');
closeElem.forEach(close);

modalMain.className = 'modal modal_active';

function close(item) {
  showSuccess.onclick = function() {
    modalMain.className = 'modal';
    modalSuccess.className = 'modal modal_active';
  }

  item.onclick = function() {
    modalMain.className = 'modal';
    modalSuccess.className = 'modal';
  }
}
