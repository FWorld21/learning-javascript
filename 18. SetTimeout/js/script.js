'use strict';

const timerID1 = setTimeout(function(textFromArguments) {
    console.log(textFromArguments);
}, 1000, "This is fucking text");

setTimeout(() => {
    console.log("Не обязательно создавать для этого переменные");
}, 2000);

const testfunc = () => {
    console.log("Можно так же передать название функции в setTimeout, а не создавать внутри него функции");
};
setTimeout(testfunc, 3000);


const timerID = setTimeout(() => {alert("Вы не успели остановить таймер");}, 3000);
const button = document.querySelector('button');
button.addEventListener('click', () => {
    clearInterval(timerID);
    let p = document.querySelector('p');
    p.style.display = 'block';
});