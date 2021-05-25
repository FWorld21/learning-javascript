"use strict";

let timeLord = { // Создаю объект.
    health: 1200, // Создаю свойство объекта и сразу присваиваю ему значение (числовое 1200)
    reg: 1, // см. коммент выше.
    sayHello: function ()  { // Создаю свойство объекта в качесвте функции.
        console.log("Hello world"); // Эта функция будет выводить в консоль словa Hello world.
    }
};

let doctor = { // Создаю объект.
    health: 100, // Создаю свойство объекта и сразу присваиюва ему занчение (числовое 1)
};

doctor.__proto__ = timeLord; // Делаю объект doctor, прототипом timeLord (Устаревший метод).

Object.setPrototypeOf(doctor, timeLord); // Делаю объект doctor, прототипом timeLord(Современный метод).
let master = Object.create(timeLord); // Делаю объект master, протипом timeLord, сразу, без инициализации. 


doctor.sayHello(); // Вызываю метод sayHello, объекта doctor.
master.sayHello(); // Вызываю метод sayHello, объекта master.