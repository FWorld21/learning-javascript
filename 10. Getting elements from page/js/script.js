"use strict";

const box = document.getElementById('box'); // Я получаю элемент по его id.
const buttons = document.getElementsByTagName('button'); // Я получаю список всех элементов с тегом button.
const fifthButton = document.getElementsByTagName('button')[4]; // Я получаю четвёртый элемент из списка элементов с тегом button.
const paragraph = document.getElementsByClassName('lorem'); // Я получаю список всех элементов с классом lorem.
const newDoctors = document.querySelectorAll('.list'); // Современный способ получать элементы через селекторы.
let i = 0; // Создаю переменную и присваиваю ей значение 0.
while (i != newDoctors.length) { // Пробегаюсь циклом, ПОКА значение переменной i не будет равно длинне списка элементов.
    console.log(newDoctors[i]); // Вывожу в консоль элемент из списка.
    i++;
}// Так можно получить список всех элементов из псевдомассива..

newDoctors.forEach(item => {
    console.log(item);
}); // Тоже самое, но другим способом (желательным).

// Вывод в консоль значения псевдомассивов/элементов.
console.log(box);
console.log(buttons);
console.log(fifthButton);
console.log(paragraph);
console.log(newDoctors);