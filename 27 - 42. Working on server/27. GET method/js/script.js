'use strict';

const inputRUB = document.querySelector('#rub'), // Получаю элементы по их IDшнику.
      inputUSD = document.querySelector('#usd');

inputRUB.addEventListener('input', () => { // Добавляю эвент листенер при вводе чего-либо в input.
    const request = new XMLHttpRequest(); // Создаю объект на основе класса XMLHttpRequest.
    request.open("GET", "./js/current.json"); // При получении GET запроса, я открываю файл current.json.
    request.overrideMimeType("application/json"); // Я даю понять что всё будет передаваться в json формате.
    request.setRequestHeader("Content-type", "application/json; charset=utf-8"); // Тут я создаю хедер, для успешного GET запроса.
    request.send(); // Тут я отправляю запрос.

    request.addEventListener('load', () => { // Добавляю эвент листенер на запрос, при его ЗАГРУЗКЕ.
        if (request.status === 200) { // Проверяю статус, который вернет нам запрос. Если он будет равен 200, то тогда...
            console.log(request.response); // Вывести в консоль то, что он получил.
            const data = JSON.parse(request.response);
            inputUSD.value = +inputRUB.value / data.current.usd.toFixed(2);
        } else { // Во всех других случаях.
            inputUSD.value = 'Ошибка';
        }
    });
});