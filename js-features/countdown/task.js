'use strict';

// Задание (обычное)
/* let counter = document.getElementById('timer');
let timer = setInterval(test, 1000);

function test() {
  if (+counter.textContent === 0) {
    clearInterval(timer)
    // alert('Вы победили в конкурсе!');
  } else {
    counter.textContent = counter.textContent - 1;
  }
} */

// Задание повышенной сложности

let hours = document.getElementById('hh');
let minutes = document.getElementById('mm');
let second = document.getElementById('ss');

let timer = setInterval(actionTimer, 1000);

function actionTimer() {
  second.textContent -= 1;

  if (+second.textContent === 0 && +minutes.textContent > 0) {
    minutes.textContent -= 1;
    second.textContent = 60;
  }

  if (+second.textContent === 0 && +minutes.textContent === 0 && hours.textContent > 0) {
    hours.textContent -= 1;
    minutes.textContent = 59;
    second.textContent = 60;
  }

  if (second.textContent < 10) {
    second.textContent = '0' + second.textContent;
  } else if (minutes.textContent < 10 && second.textContent === '60') {
    minutes.textContent = '0' + minutes.textContent;
  } else if (hours.textContent < 10 && minutes.textContent === '59' && second.textContent === '60') {
    hours.textContent = '0' + hours.textContent;
  }

  if (+hours.textContent === 0 && +minutes.textContent === 0 && +second.textContent === 0) {
    clearInterval(timer);
    alert('Вы победили в конкурсе!');
  }
}
