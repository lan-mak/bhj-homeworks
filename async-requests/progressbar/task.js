'use strict';

let form = document.getElementById('form');
const progressBar = document.getElementById('progress');

form.addEventListener('submit', action);

function action(event) {
    event.preventDefault();

    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    xhr.upload.addEventListener('progress', (event) => {
        console.log('Загружено: '  + (event.loaded * 100 / event.total) + ' %');
        progressBar.value = event.loaded / event.total;
    })

    xhr.upload.addEventListener('load', () => {
      alert(`Данные успешно отправлены.`);
    });

    xhr.send(formData);
}
