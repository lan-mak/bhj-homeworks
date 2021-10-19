'use strict';

let interval = setInterval(flashText, 1000);

function flashText() {
  let caseRotator = document.querySelectorAll('.rotator__case_active');
  let rotator = document.querySelectorAll('.rotator');

  caseRotator.forEach(swithElement);

  function swithElement(item) {
    let nextItem = item.nextElementSibling;
    if (item.classList.contains('rotator__case_active') && nextItem !== null) {
      item.classList.remove('rotator__case_active');
      nextItem.classList.add('rotator__case_active');
    } else if (item.classList.contains('rotator__case_active') && nextItem === null) {
      item.classList.remove('rotator__case_active');
      rotator.forEach(reboot);
    }
  }

  function reboot(item) {
    item.firstElementChild.classList.add('rotator__case_active');
  }
}




