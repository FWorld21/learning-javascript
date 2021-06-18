import { closeModalWindow, showModalWindow } from './modal';

const showThanksModal = (message, modalSelector) => {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    showModalWindow(modalSelector);

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
        closeModalWindow(modalSelector);
    }, 4000);
};

export default showThanksModal;
