'use strict';

let form = document.getElementById('tasks__form');
let taskList = document.querySelector('.tasks__list');

form.addEventListener('submit', action);

function action(event) {
  event.preventDefault();

  const text = document.querySelector('.tasks__input').value.trim();

  if (text === '') {
    alert('пустая задача');
  } else {
    let task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `
    <div class="task__title">
    ${text}
    </div>
    <a href="#" class="task__remove">&times;</a>
    `;
    taskList.insertAdjacentElement('afterbegin', task);
    form.reset();
  }
}

document.addEventListener('click', removeTask)

function removeTask(event) {
  let taskControl = event.target
  if (taskControl.className === 'task__remove') {
    taskControl.closest('.task').remove()
  }
}
