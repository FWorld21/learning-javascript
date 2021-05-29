"use strict";

const firstButtons = document.querySelectorAll('#first button'); // Получаю все кнопки из тэга с ID first.
const secondWrapper = document.querySelector('#second'); // Получаю тэг с ID second.

firstButtons.forEach((btn) => { // Пробегаюсь циклом по массиву элементов.
    btn.addEventListener('click', (e) => { // Добавляю обработчик событий на клик.
        if (e.target.classList.contains('red')) { // Если вдруг элемент будет иметь класс red, то ...
            e.target.classList.remove('red'); // Удалить этот класс у этого тэга.
        } else { // Во всех других случаях...
            e.target.classList.add('red'); // Добавить класс к этому элементу.
        }
    });
});

secondWrapper.addEventListener('click', (event) => { // Добавляю обработчик событий к массиву элементов.
    if (event.target && event.target.tagName == "BUTTON") { // Если вдруг можно будет взять event.target И его тэг будет равен BUTTON.
        event.target.classList.toggle("blue"); // То тогда добавить класс blue, если его нету. Если есть то удалить его от туда.
    }
});