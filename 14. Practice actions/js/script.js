'use strict';


document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const ad = document.querySelector('.promo__adv'),
          banner = document.querySelector('.promo__bg'),
          genre = document.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]'),
          lis = document.querySelectorAll('.promo__interactive-item');
    
    const personalize = () => {
        ad.remove();
        banner.style.background = 'url("./img/bg.jpg")';
        genre.innerHTML = 'драма';
    };

    const sortArr = (array) => {
        array.sort();
    };

    const createMovieList = (films, parent) => {
        parent.innerHTML = '';
        sortArr(movieDB.movies);
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">
                ${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            console.log(btn);
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    };

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = addInput.value,
            favourite = checkbox.checked;
        
        if (!newFilm) {
            alert("Вы не ввели название фильма.");
        } else {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            movieDB.movies.push(newFilm.toLowerCase());
            createMovieList(movieDB.movies, movieList);
            event.target.reset();
            if (favourite) {
                console.log("Добавлен любимый фильм");
            }
        }
        console.log(movieDB.movies);
    });

    personalize();
    createMovieList(movieDB.movies, movieList);

});