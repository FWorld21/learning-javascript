"use strict";

const timeLord = { // Я создал объект.
    health: 1200, // Я создал свойство и присвоил ему значение.
    regeneration: function(times) { // Я создал метод этому объекту.
        this.health -= times * 100; // Я отнимаю из свойства число, переданное в параметры, умноженное на 100.
    }
}

let doctor = Object.create(timeLord); // Я создаю ещё один объект на основе этого объекта.
console.log(doctor.health); // Я вывожу в консоль значение свойства health.
doctor.regeneration(8); // Я использую метод, передав в параметры 8.
console.log(doctor.health); // Я вывожу в консоль значение свойтсва health.