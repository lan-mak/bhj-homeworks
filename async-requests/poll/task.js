'use strict';

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let getData = JSON.parse(xhr.responseText);
    let pollTitle = document.querySelector('#poll__title');
    let answers = document.querySelector('#poll__answers');

    pollTitle.innerHTML = `
    <h1>${getData.data.title}</h1>
    `;

    getData.data.answers.forEach(elem => {
      let item = document.createElement('button');
      item.classList.add('poll__answer');
      item.innerText = elem;
      answers.append(item);
    });

    let buttons = document.getElementsByTagName('button');
    let test = Array.from(buttons);

    test.forEach(item => {
      item.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
        window.location.reload();
      });
    });
  }
});

xhr.send();
