import showThanksModal from './spinner';

function forms (modalSelector) {
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
                showThanksModal(messages.success, modalSelector);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(messages.failure, modalSelector);
            }).finally(() => {
                form.reset();
            });
        });
    }
}

export default forms;