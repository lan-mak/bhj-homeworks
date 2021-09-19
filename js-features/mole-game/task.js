'use strict';

let getHole = document.getElementsByClassName('hole');

for (let index = 1; index <= getHole.length; index++) {
  let id = 'hole' + index;
  let holeButton = document.getElementById(id);
  let deadCount = document.getElementById('dead');
  let lostCount = document.getElementById('lost');

  function checkGame() {
    if (+deadCount.textContent === 10) {
      alert('Вы победили!');
      resetCount();
    }

    if (+lostCount.textContent === 5) {
      alert('вы проиграли!');
      resetCount();
    }
  }

  function resetCount() {
    deadCount.textContent = 0;
    lostCount.textContent = 0;
  }

  holeButton.onclick = function () {
    if (holeButton.classList.contains('hole_has-mole')) {
      deadCount.textContent = +deadCount.textContent + 1;
      checkGame();
    } else {
      lostCount.textContent = +lostCount.textContent + 1;
      checkGame();
    }
  }
}


