'use strict';

let controlFont = document.querySelectorAll('.font-size');

for (let item of controlFont) {
    item.addEventListener('click', onClick);
}

function onClick(event) {
    event.preventDefault();
    let controlElement = event.target;
    let book = this.closest('#book');
    let classFontSize = `book_fs-${this.dataset.size}`

    if (controlElement.classList.contains('font-size_small') && !book.classList.contains('classFontSize')) {
        book.className = 'book';
        book.classList.add(classFontSize);
    }

    if (controlElement.classList.contains('font-size_active')) {
        book.className = 'book';
    }

    if (controlElement.classList.contains('font-size_big') && !book.classList.contains('classFontSize')) {
        book.className = 'book';
        book.classList.add(classFontSize);
    }
}
