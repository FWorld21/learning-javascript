'use strict';

const ans = prompt('Enter your name');

const reg = /n/i;
console.log(ans.match(reg));