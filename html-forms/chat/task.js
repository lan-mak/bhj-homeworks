'use strict';

const rolledWidget = document.querySelector('.chat-widget__side');
const openWidget = document.querySelector('.chat-widget');
const listMsg = document.querySelector('.chat-widget__messages');
const sendMsg = document.querySelector('#chat-widget__input');

const answerBot = ['Салют!', 'Подождите минутку', 'Через некоторое время вам ответит оператор...'];

rolledWidget.addEventListener('click', openChat);
sendMsg.addEventListener('keydown', send);

function openChat() {
  openWidget.classList.add('chat-widget_active');
  botMsg();
}

function botMsg() {
  listMsg.innerHTML += `
    <div class="message">
    <div class="message__time">${timeMsg()}</div>
    <div class="message__text">${answerMsg()}</div>
  </div>
  `;
  scrollBottom();
}

function send(event) {
  if (event.key === 'Enter') {
    listMsg.innerHTML += `
    <div class="message_client message_client">
    <div class="message__time">${timeMsg()}</div>
    <div class="message__text">${sendMsg.value}</div>
    </div>
    `;
    sendMsg.value='';
    botMsg();
  }
}

function timeMsg() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${minutes}`;
}

function answerMsg() {
  return answerBot[Math.floor(Math.random() * answerBot.length)];
}

function scrollBottom() {
  const scroll = document.querySelector('.chat-widget__messages-container');
  console.log(scroll.scrollTop = scroll.scrollHeight);
}






