let firstName = Symbol('first name');
let person = {};
person[firstName] = 'Nicolas';

console.log(person.firstName);
console.log(person[firstName]);

console.log(firstName in person);