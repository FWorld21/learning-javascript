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
        if (event.target === modalWindow || event.target.getAttribute('data-modal-close' == '')) {
            closeModalWindow();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModalWindow();
        }
    });

    // Open modal window by timeout&by scroll down

    const modalTimer = 50000;
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

    axios.get('http://localhost:3000/menu').then(data => {
        data.data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    });


    // Forms

    const forms = document.querySelectorAll('form');
    const messages = {
        loading: './img/spinner/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    };

    forms.forEach((item) => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const result = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data,
        });
        return await result.json();
    };

    function bindPostData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = messages.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.append(statusMessage);

            
            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(messages.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(messages.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }

    // Spinner

    const showThanksModal = (message) => {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        showModalWindow();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-modal-close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModalWindow();
        }, 4000);
    };

    // Slides

    const slideElement = document.querySelector('.offer__slider-wrapper img'),
          prevSlideButton = document.querySelector('.offer__slider-counter .offer__slider-prev'),
          nextSlideButton = document.querySelector('.offer__slider-counter .offer__slider-next'),
          currentSlideCount = document.querySelector('#current'),
          totalSlidesCount = document.querySelector('#total');

    let currentSlideNumber = 1;
    currentSlideCount.innerHTML = `01`;

    axios.get('http://localhost:3000/slides').then(data => {
        const totalSlideNumber = `` + Object.entries(data.data[0]).length;
        totalSlidesCount.innerHTML = `0${totalSlideNumber}`;
    });
    nextSlideButton.addEventListener('click', () => {
        if (currentSlideNumber != 4) {
            currentSlideNumber++;
            axios.get('http://localhost:3000/slides').then(data => {
                slideElement.classList.add('fade');
                slideElement.src = data.data[0]["slide_" + currentSlideNumber];
            });
            currentSlideCount.innerHTML = `0${currentSlideNumber}`;
            slideElement.classList.remove('fade');
        } 
    });
    prevSlideButton.addEventListener('click', () => {
        if (currentSlideNumber != 1) {
            currentSlideNumber--;
            axios.get('http://localhost:3000/slides').then(data => {
                slideElement.classList.add('fade');
                slideElement.src = data.data[0]["slide_" + currentSlideNumber];
            });
            currentSlideCount.innerHTML = `0${currentSlideNumber}`;
            slideElement.classList.remove('fade');
        }
    });

    // Slides navigation

    const dots = Array.from(document.querySelectorAll('.dot'));
    dots[0].classList.add('active');
    dots.forEach(item => {
        item.addEventListener('click', (event) => {
            dots.forEach(item => {
                item.classList.remove('active');
            });
            const index = dots.indexOf(event.target) + 1;
            axios.get('http://localhost:3000/slides').then(data => {
                slideElement.classList.add('fade');
                slideElement.src = data.data[0]["slide_" + index];
            });
            currentSlideCount.innerHTML = `0${index}`;
            slideElement.classList.remove('fade');
            currentSlideNumber = index;
            event.target.classList.add('active');
        });
    });
});
