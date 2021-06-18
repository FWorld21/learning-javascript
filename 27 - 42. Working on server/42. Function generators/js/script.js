'use strict';

function* justAGenerator() {
	yield 'h';
	yield 'e';
	yield 'l';
	yield 'l';
	yield 'o';
}

const str = justAGenerator();
console.log(str.next().value);
console.log(str.next().value);
console.log(str.next().value);
console.log(str.next().value);
console.log(str.next().value);