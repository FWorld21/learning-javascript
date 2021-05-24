"use strict";

let timeLord = {
    health: 1200,
    reg: 1,
    sayHello: function ()  {
        console.log("Hello world")
    }
};

let doctor = {
    health: 100,
};

doctor.__proto__ = timeLord;

Object.setPrototypeOf(doctor, timeLord)
 
console.log(doctor.sayHello())