'use strict';

console.log('Запрос данных...');

const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных');
        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);
    },2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            reject();
        }, 2000);
    });
}).then((data) => {
    data.modify = true;
    return data;
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.log('Произошла ошибка.');
}).finally(() => {
    console.log('Всё операции завершены (не знаю успешно или нет. это уже как повезёт)');
});
