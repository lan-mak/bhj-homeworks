'use strict';

document.addEventListener('change', onChange);

function onChange(event) {
  let element = event.target;
  let rubric = element.closest('.interest');
  let subRubric = rubric.querySelectorAll('.interest__check');

  if (element.closest('.interests_active') === null) {
    subRubric.forEach(item => {
      if (element.checked) {
        item.checked = true;
      } else {
        item.checked = false;
      }
    });
  } else {
    subRubric.forEach(item => {
      let perentRubric = item.closest('.interests .interests_active').previousElementSibling;
      perentRubric.querySelector('.interest__check').checked = true;
    });
  }
}
