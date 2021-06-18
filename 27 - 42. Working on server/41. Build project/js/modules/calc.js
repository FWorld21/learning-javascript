function calc () {
    const gender = document.querySelectorAll('[data-gender]');
    const inputs = document.querySelectorAll('[data-calc-inputs]');
    const activity = document.querySelectorAll('[data-activity]');
    const calcValue = document.querySelector('.calculating__result span');
    const calcDB = {
        gender: gender[0].innerText,
        height: '',
        weight: '',
        age: '',
        activity: activity[1].getAttribute('data-activity')
    };

    const checkValue = (obj) => {
        for (let i in obj) {
            if (obj[i] == '') {
                return false;
            }
        }
        return true;
    };


    const changeValue = (obj) => {
        if (checkValue(obj)) {
            let result = 0;
            if (obj.gender == 'Мужчина') {
                result =  Math.round((447.6 + (9.2 * obj.weight) + (3.1 * obj.height) - (4.3 * obj.age)) * calcDB.activity);
            } else {
                result = Math.round((88.36 + (13.4 * obj.weight) + (4.8 * obj.height) - (5.7 * obj.age)) * calcDB.activity);
            }
            
            if (result < 0) {
                calcValue.innerHTML = '0';
            } else if (result > 5000) {
                calcValue.innerHTML = '0';
            } else {
                calcValue.innerHTML = result;
                localStorage.setItem('calcValues', obj);
            }
        }
    };

    gender.forEach(item => {
        item.addEventListener('click', (event) => {
            gender.forEach(tag => {
                tag.classList.remove('calculating__choose-item_active');
            });
            calcDB.gender = event.target.innerText;
            event.target.classList.add('calculating__choose-item_active');
            changeValue(calcDB);
        });
    });
    inputs.forEach(item => {
            item.addEventListener('input', (event) => {
            calcDB[event.target.id] = event.target.value;
            changeValue(calcDB);
        });
    });

    activity.forEach(item => {
        item.addEventListener('click', (event) => {
            activity.forEach(tag => {
                tag.classList.remove('calculating__choose-item_active');
            });
            calcDB.activity = event.target.getAttribute('data-activity');
            event.target.classList.add('calculating__choose-item_active');
            changeValue(calcDB);
        });
    });
}

export default calc;