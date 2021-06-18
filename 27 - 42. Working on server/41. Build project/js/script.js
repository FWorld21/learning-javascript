'use strict';

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import slider from './modules/slider';
import forms from './modules/forms';

document.addEventListener('DOMContentLoaded', () => {

    tabs();
    modal('[data-modal]', '.modal', '.modal__close');
    timer();
    cards();
    calc();
    slider();
    forms('.modal');

});
