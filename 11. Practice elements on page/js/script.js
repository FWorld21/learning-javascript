/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"
м 
3) Изменить задний фон постера с фильмона изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.querySelector('.promo__adv').remove();
document.querySelector('.promo__bg').style.background = 'url("./img/bg.jpg")';
document.querySelector('.promo__genre').innerHTML = 'драма';
let lis = document.querySelectorAll('.promo__interactive-item');
for (let i = 0; i != movieDB.movies.length; i++) {
    lis[i].innerHTML = `${i + 1}. ${movieDB.movies[i]} <div class="delete"></div>`;
}