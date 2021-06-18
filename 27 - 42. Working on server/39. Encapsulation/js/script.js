'use strict';

function User (name, age) {
	let userName = name;
	this.age = age;
	this.say = () => {
		console.log(`Username: ${userName}\nAge: ${this.age}`);
	};
	this.getMge = () => {
		return userName;
	};
	this.setName = (name) => {
		if (typeof name != 'number' && name.length < 30 && name.length > 2) {
			userName = name;
		} else {
			console.log('\n\n[!] Invalid name\n\n');
		}
	}
};

const alex = new User('Alex', 25);
alex.userName = 'sdf'; // Не сработает!
alex.say();
alex.setName('ssssssssssssssssssssssssssssssssssssssssssssssssJimmy');
alex.setName('Jimmy');
alex.say();

class ClassUser {
	constructor (name, age) {
		let _name = name;
		this._age = age;
	}

	say () {
		console.log(`Username: ${this._name}\nAge: ${this._age}`);
	}

	get name () {
		return this._name;
	}


	set name(newName) {
		if (typeof newName != 'number' && newName.length < 30 && newName.length > 2) {
			this._name = newName;
		} else {
			console.log('Invalid name');
		}
	}
}

const userObj = new ClassUser("Jimmy", 17);
userObj._name = 'Alex';
userObj.say();