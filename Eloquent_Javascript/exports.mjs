export var color = 'red';
export var name = 'Nicholas';
export const magicNumber = 7;

export function sum(num1, num2) {
    return num1 + num2;
}

export function setName(newName) {
    name = newName
}

export class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

}

function subtract(num1, num2) {
    return num1 - num2;
}

export default function(num1, num2) {
    return num1 * num2;
}











