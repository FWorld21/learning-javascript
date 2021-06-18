'use strict';

window.localStorage.setItem('youtube-link', '<a href="https://youtube.com/">Youtube Link</a>');
const box = document.querySelector('#box');
box.innerHTML += window.localStorage.getItem('youtube-link');