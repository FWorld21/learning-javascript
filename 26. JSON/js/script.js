'use strict';

const person = {
    'name': 'alex',
    'punk': true,
    'ishasguitar': true,
    'electro': false,
    'phone number': '+998993233213',
    'parents': {
        'mom': 'Anarchy',
        'dad': 'Porto'
    }
};

console.log(JSON.stringify(person));
console.log(JSON.parse(JSON.stringify(person)));

const clone = console.log(JSON.parse(JSON.stringify(person))); // НЕ зависящий от родителя клон.