'use strict';

window.addEventListener('load', () => {
  let openModalWindow = document.querySelector('#subscribe-modal');
  let closeModalWindow = document.querySelector('.modal__close');

    if (document.cookie === '' || modalCloseCookie !== 'modalWindow=close') {
      openModalWindow.classList.add('modal_active');
      closeModalWindow.addEventListener('click', () => {
        openModalWindow.classList.remove('modal_active');
        document.cookie = window.location.href;
        document.cookie = 'modalWindow=close';
      });
    }

    function modalCloseCookie() {
      let arrCookie = document.cookie.split('; ');
      let closeParam = arrCookie.find(item => item === 'modalWindow=close');
      return closeParam;
    }
});
