'use strict';

let controlFont = document.querySelectorAll('.font-size');

for (let item of controlFont) {
    item.addEventListener('click', onClick);
}

function onClick(event) {
    event.preventDefault();
    let controlElement = event.target;
    let book = this.closest('#book');
    let classFontSize = `book_fs-${this.dataset.size}`;

    if (controlElement.classList.contains('font-size_small') && !book.classList.contains('classFontSize')) {
        changeControl();
        book.classList.add(classFontSize);
    }

    if (controlElement.classList.length === 1) {
        changeControl();
    }

    if (controlElement.classList.contains('font-size_big') && !book.classList.contains('classFontSize')) {
        changeControl();
        book.classList.add(classFontSize);
    }

    function changeControl() {
        let controlActive = document.querySelector('.font-size_active');
        controlActive.classList.remove('font-size_active');
        book.className = 'book';
        controlElement.classList.add('font-size_active');
    }
}
