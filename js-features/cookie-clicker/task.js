'use strict';

let cockie = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');
let sizeImage = 1;
let scoreClick = document.getElementById('clicker__score');
let arrScore = [];

function score() {
  arrScore.push(Date.now());

  if (arrScore.length > 1) {
    let speedClick = 1/((arrScore[1] - arrScore[0])/1000);
    scoreClick.textContent = speedClick.toFixed(2);
    arrScore.shift();
  }
}

/* function checkScore() {
  if (+counter.textContent === 0) {
    scoreClick.textContent = 0;
    click_1 = Date.now();
  } else {
    click_2 = Date.now();
    let score = +counter.textContent/new Date(click_2 - click_1).getSeconds();
    scoreClick.textContent = score.toFixed(2);
  }
} */

cockie.onclick = () => {
  if (sizeImage === 1) {
    cockie.width = 180;
    sizeImage = 0;
    score();
    // checkScore();
  } else {
    cockie.width = 200;
    sizeImage = 1;
    score();
    // checkScore();
  }
  counter.textContent = +counter.textContent + 1;
}
