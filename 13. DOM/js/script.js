"use strict";

console.log(document.head); // Получаю элемент head с html разметки.
console.log(document.documentElement); // Получаю элемент html с html разметки.
console.log(document.body.childNodes); // Получаю абсолютно все ноды в теге body (#text - означает перенос строки).
console.log(document.body.firstChild); // Получаю самую самую первую ноду в теге body
console.log(document.body.lastChild); // Получаю самую самую последнюю ноду в теге body
console.log(document.querySelector('#third').parentNode.parentNode); // Получаю родительскую ноду, родительской ноды в элементе, с ID #third
console.log(document.querySelector('#third').parentElement); // Получаю родительскую ноду в элементе, с ID #third

console.log(document.querySelector('[data-fourth]')); // Получаю элемент, имеющий атрибут data-fourth
console.log(document.querySelector('[data-fourth]').nextSibling); // Полчаю соседнюю ноду (вниз) элемента, имеющего атрибут data-fouth
console.log(document.querySelector('[data-fourth]').nextSibling.nextSibling); // Получаю соседнюю ноду, соседней ноды, элемента,
// имеющего артибут data-fourth

console.log(document.querySelector('[data-first-button]').previousSibling); // Получаю предыдущую НОДУ элемента, имеющего артибут data-first-button.
console.log(document.querySelector('[data-first-button]').previousElementSibling); // Получаю предыдущий ЭЛЕМЕНТ, элемента, имеющего атрибут data-first-button.
console.log(document.querySelector('[data-first-button]').previousSibling.previousSibling); // Получаю предыдущую ноду, предыдущей ноды элемента, имеющего атрибут data-first-button.
