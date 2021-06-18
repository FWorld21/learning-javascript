'use strict';

const names = ['Alex', 'John', 'Kim', 'Ann', 'Ksenia', 'Voldemart'];
const shortNames = names.filter((name) => {
    return name.length < 5;
});

console.log(shortNames);

let answers = ['IvAnn', 'JojN', 'HellO'];
answers = answers.map((item) => {
    return item.toLowerCase();
});

console.log(answers);

const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumber = [2, 4, 6, 8];

const sum = allNumbers.reduce((sum, current) => sum + current);

console.log(sum);

const newArr = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};
const persons = Object.entries(newArr).filter((item) => {
    return item[1] === 'person';
}).map((item) => item[0]);
console.log(persons);
