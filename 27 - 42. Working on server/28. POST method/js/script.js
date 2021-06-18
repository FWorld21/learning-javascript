'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    const hideTabContent = () => {
        tabsContent.forEach(element => {
            element.classList.add('hide');
            element.classList.remove('show', 'fade');
        });
        tabs.forEach(element => {
            element.classList.remove('tabheader__item_active');
        });
    };

    const showTabContent = (i=0) => {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    };
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((element, i) => {
                if (target == tabs[i]) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer

    const deadline = "2021-07-11";
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);

    // Modal window open&close

    const showModalElement = document.querySelectorAll('[data-modal]');
    const closeModalWindowElement = document.querySelector('.modal__close');
    const modalWindow = document.querySelector('.modal');

    const showModalWindow  = () => {
        if (modalWindow.classList.contains('hide')) {
            modalWindow.classList.add('show');
            modalWindow.classList.remove('hide');
            modalWindow.classList.add('fade');   
        }
    };

    const closeModalWindow = () => {
        if (modalWindow.classList.contains('show')) {
            modalWindow.classList.remove('show');
            modalWindow.classList.add('hide');
        }
    };

    showModalElement.forEach((element) => {
        element.addEventListener('click', () => {
            showModalWindow();
        });
    });

    closeModalWindowElement.addEventListener('click', () => {
        closeModalWindow();
    });

    modalWindow.addEventListener('click', (event) => {
        if (event.target === modalWindow) {
            closeModalWindow();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModalWindow();
        }
    });

    // Open modal window by timeout&by scroll down

    const modalTimer = 15000;
    const modalTimeOut = setTimeout(() => {
        showModalWindow();
    }, modalTimer);
    
    const showModalScroll = () => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModalWindow();
            window.removeEventListener('scroll', showModalScroll);
        }
    };

    window.addEventListener('scroll', showModalScroll);

    // Creating cards, using classess

    class MenuCard {
        constructor(imageSrc, alt, title, description, price, parentSelector) {
            this.imageSrc = imageSrc;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.parentSelector = document.querySelector(parentSelector);
        }
        render() {
            const element = document.createElement('div');
            element.innerHTML = 
            `
                <div class="menu__item">
                    <img data-menu-img src=${this.imageSrc} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span class="span-price">${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
            this.parentSelector.append(element);
        }
    }
    new MenuCard(
        'img/tabs/elite.jpg', 
        'elite', 
        '"Меню “Премиум”', 
        'В меню “В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 
        550,
        '.menu .container').render();
    new MenuCard(
        '"img/tabs/vegy.jpg"',
        '"vegy"',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        229,
        '.menu .container').render();
    new MenuCard(
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        '430',
        '.menu .container').render();

    // Forms

    const forms = document.querySelectorAll('form');
    const messages = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    };

    forms.forEach((item) => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.innerHTML = messages.loading;
            form.append(statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            
            request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);
            const obj = {};
            formData.forEach(function(value, key) {
                obj[key] = value;
            });
            const jsonData = JSON.stringify(obj);


            // request.send(formData);
            request.send(jsonData);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = messages.success;
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                } else {
                    statusMessage.textContent = messages.failure;
                }
            });
        });
    }
});
