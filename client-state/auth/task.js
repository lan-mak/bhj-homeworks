'use strict';

let form = document.getElementById('signin__form');
let welcome = document.getElementById('welcome');
checkUser();

form.addEventListener('submit', event => {
  event.preventDefault();
  let dataform = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  xhr.addEventListener('load', () => {
    let responseXHR = JSON.parse(xhr.response);
    if (xhr.status === 200 && responseXHR.success) {
      localStorage.user_id = responseXHR.user_id;
      localStorage.password = responseXHR.password;
      let alert = document.querySelector('.alert');
      if (alert !== null) {
        alert.remove();
      }
      checkUser();
    } else {
      form.closest('.card').insertAdjacentHTML('beforeend', `<span class='alert'>Неверный логин/пароль</span>`);
      form.reset();
    }
  });
  xhr.send(dataform);
});

function checkUser() {
  if (localStorage.user_id) {
    form.closest('.signin').classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    welcome.querySelector('span').textContent = `${localStorage.user_id}`;
  }
}
