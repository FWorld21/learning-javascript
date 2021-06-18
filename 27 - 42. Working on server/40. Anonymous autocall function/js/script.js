'use strict';

const anonPrivate = (function () {
	const username = 'Alex';
	const age = 27;
	const hobby = 'guitar';
	const showInfo = () => {
		console.log(`
			Username: ${username}\n
			Age: ${age}\n
			Hobby: ${hobby};
		`);
	};
	const saySomething = () => {
		console.log(`
			Listen yourself!
		`);
	};
	return {
		info: showInfo,
		words: saySomething
	};
}());

anonPrivate.info();
anonPrivate.words();