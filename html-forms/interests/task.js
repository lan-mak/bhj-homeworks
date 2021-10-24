'use strict';

document.addEventListener('change', onChange);

function onChange(event) {
  let element = event.target;
  let rubric = element.closest('.interest');
  let subRubric = rubric.querySelectorAll('.interests_active .interest__check');

  subRubric.forEach(action);

  function action (item) {
    if (item.checked) {
      item.checked = false;
    } else {
      item.checked = true;
    }
  }
}
