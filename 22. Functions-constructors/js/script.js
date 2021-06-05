"use strict";

function User (name, id) { // Старый формат, не нуждающийся в представлении.
    this.name = name;
    this.id = id;
    this.human = true;
    this.sayHello = () => {
        console.log(`${this.name} says "Hello!"`);
    };
    this.saySomeThing = (text) => {
        console.log(`${this.name} says "${text}"`);
    };
}

const ivan = new User('Ivan', '0');
const alex = new User('Alex', '1');

console.log(ivan);
console.log(alex);

alex.saySomeThing("HW");
