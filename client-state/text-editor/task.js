'use strict';

let content = document.getElementById('editor');

content.addEventListener('keyup', () => {
  localStorage.setItem('textarea', content.value);
});

if (localStorage.textarea) {
  content.value = localStorage.textarea;
}
