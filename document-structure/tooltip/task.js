'use strict';

let link = document.querySelectorAll('.has-tooltip');
let body = document.querySelector('body');

link.forEach(action);

function action(item) {
  item.addEventListener('click', onClick);

  function onClick(event) {
    event.preventDefault();
    let element = event.target;

    if(!document.querySelector('.tooltip')) {
      createTooltip();
    }

    function createTooltip() {
      let elem = document.createElement('div');
      elem.classList.add('tooltip');
      body.insertBefore(elem, body.children[1]);
    }

    let tooltip = document.querySelector('.tooltip');

    if(!tooltip.classList.contains('tooltip_active')) {
      tooltip.classList.add('tooltip_active');
      updTooltip();
    } else if (element.title !== tooltip.innerText && tooltip.classList.contains('tooltip_active')) {
      updTooltip();
    } else {
      tooltip.classList.remove('tooltip_active');
    }

    function updTooltip() {
      tooltip.innerHTML = `${element.title}`;
      tooltip.style.top = `${element.getBoundingClientRect().top + element.getBoundingClientRect().height}px`;
      tooltip.style.left = `${element.getBoundingClientRect().left}px`;
    }
  }
}

body.addEventListener('click', click);

function click(event) {
  let element = event.target.classList.value;
  let tooltip = document.querySelector('.tooltip');
  if (element !== 'has-tooltip' && tooltip !== null) {
    body.removeChild(tooltip, body.children[1]);
  }
}
