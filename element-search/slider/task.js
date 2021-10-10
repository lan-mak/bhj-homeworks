'use strict';

let control = document.querySelectorAll('.slider__arrow');
let imgItem = document.querySelectorAll('.slider__image');
let arrItem = Array.from(imgItem);
let lengthArr = arrItem.length - 1

let activeSlide = null;

control.forEach(controlArrow);

function controlArrow(item) {
  item.onclick = function () {
    if (item.closest('.slider__arrow_next')) {
      nextSlide(findActive());
    } else {
      prevSlide(findActive());
    }
  }
}

function findActive() {
  activeSlide = arrItem.findIndex((item) => item.closest('.slider__item_active'));
  return activeSlide;
}

function nextSlide(number) {
  let slide = arrItem[number].closest('.slider__item');
  slide.className = 'slider__item';
  if (number < lengthArr) {
    number = number + 1;
    slide = arrItem[number].closest('.slider__item');
    slide.className = 'slider__item slider__item_active';
  } else {
    number = 0;
    slide = arrItem[number].closest('.slider__item');
    slide.className = 'slider__item slider__item_active';
  }
}

function prevSlide(number) {
  let slide = arrItem[number].closest('.slider__item');
  slide.className = 'slider__item';
  if (number === 0) {
    slide = arrItem[lengthArr].closest('.slider__item');
    slide.className = 'slider__item slider__item_active';
  } else {
    number = number - 1
    slide = arrItem[number].closest('.slider__item');
    slide.className = 'slider__item slider__item_active';
  }
}
