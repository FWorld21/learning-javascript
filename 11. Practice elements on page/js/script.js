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

const adDiv = document.querySelector('.promo__adv');
const genreDiv = document.querySelector('.promo__genre');
const posterDiv = document.querySelector('.promo__bg');
const listMovies = document.querySelectorAll('.promo__interactive-item');
adDiv.remove();
// adDiv.style.display = 'none';
genreDiv.innerHTML = 'драма';
posterDiv.style.background = 'url("./img/bg.jpg")';
for (let i = 0; i != listMovies.length; i++) {
    listMovies[i].innerHTML = `<b>${i + 1}.</b> <i>${movieDB.movies[i]}</i>`;
}