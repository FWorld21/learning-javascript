const showModalWindow  = (modalSelector) => {
    const modalWindow = document.querySelector(modalSelector);
    if (modalWindow.classList.contains('hide')) {
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        modalWindow.classList.add('fade');   
    }
};

const closeModalWindow = (modalSelector) => {
    const modalWindow = document.querySelector(modalSelector);
    if (modalWindow.classList.contains('show')) {
        modalWindow.classList.remove('show');
        modalWindow.classList.add('hide');
    }
};

function modal (triggerSelector, modalSelector, closeSelector) {
    const showModalElement = document.querySelectorAll(triggerSelector);
    const modalWindow = document.querySelector(modalSelector);
    const closeModalWindowElement = document.querySelector(closeSelector);



    showModalElement.forEach((element) => {
        element.addEventListener('click', () => {
            showModalWindow(modalSelector);
        });
    });

    closeModalWindowElement.addEventListener('click', () => {
        closeModalWindow(modalSelector);
    });

    modalWindow.addEventListener('click', (event) => {
        if (event.target === modalWindow || event.target.getAttribute('data-modal-close' == '')) {
            closeModalWindow(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModalWindow(modalSelector);
        }
    });

    // Open modal window by timeout&by scroll down

    const modalTimer = 50000;
    const modalTimeOut = setTimeout(() => {
        showModalWindow(modalSelector);
    }, modalTimer);
    
    const showModalScroll = () => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModalWindow(modalSelector);
            window.removeEventListener('scroll', showModalScroll);
        }
    };

    window.addEventListener('scroll', showModalScroll);
}

export default modal;
export {closeModalWindow};
export {showModalWindow};