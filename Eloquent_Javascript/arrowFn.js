let group = {
	title: 'Our Group',
	students: ['John', 'Pete', 'Alice'],
	showList() {
		//this.students.forEach(student => console.log(this.title + ':' + student);
		this.students.forEach(function(student) {
			console.log(this.title + ': ' + student);
		}.bind(this));
	},
	modifyList() {
		this.students =	this.students.map(function(e) {
			return this.title + ': ' + e;
		}.bind(this))
	}
};

group.showList();
group.modifyList();
console.log(group.students);
// arrow functions do not have this. If this is accessed, it is taken from the outside.
// forEach runs functions with this=undefined by default.
// Arrow functions cant's run with new

function defer(f, ms) {
	return function() {
		setTimeout(() => f.apply(this, arguments), ms);
	}
}

function sayHi(who) {
	console.log('hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred('John');

function deferRFn(f, ms) {
	return function(...args) {
		setTimeout(function() {
			return f.apply(this, args);
		}.bind(this), ms);
	}
}

let sayHiDeferredRFn = deferRFn(sayHi, 2000);
sayHiDeferredRFn('Pete');







