'use strict';

let controlFont = document.querySelectorAll('.font-size');

for (let item of controlFont) {
    item.addEventListener('click', onClick);
}

function onClick(event) {
    event.preventDefault();
    let controlElement = event.target;
    let book = this.closest('#book');
    let classLengthBook = book.className.split(' ');

    if (controlElement.classList.contains('font-size_small') && classLengthBook.length === 1) {
        let classFontSize = book.className + `_fs-${this.dataset.size}`;
        book.classList.add(classFontSize);
    }

    if (controlElement.classList.contains('font-size_active')) {
        book.className = 'book';
    }

    if (controlElement.classList.contains('font-size_big') && classLengthBook.length === 1) {
        let classFontSize = book.className + `_fs-${this.dataset.size}`;
        book.classList.add(classFontSize);
    }
}
