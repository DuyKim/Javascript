/**
 * function PersonType(name) {
    this.name = name;
}

PersonType.prototype.sayName = function() {
    console.log(this.name);
}

class PersonClass {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name)
    }
    
}

let personClass = new PersonClass('kim')
personClass.sayName();

console.log(personClass instanceof PersonClass);
console.log(Object.keys(personClass))

// the immediately invoked function expression IIFE

// the class name is only constanst inside the class itself. That mean you can overrite the class name outside the class but not inside a class method.



// class expression

let PersonClass = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayInfo() {
        console.log(`${this.name} ${this.age}`)
    }
}

let CreatePersonClass = (function(){
    "use strict";

    let CreatePersonClass2 = function(name) {
        if(typeof new.target === undefined) {
            throw new Error("Constructor must be called with new.")
        }
        this.name = name
    }

    Object.defineProperty(CreatePersonClass2.prototype, "sayName", {
        value: function() {
            if(typeof new.target !== "undefined") {
                throw new Error("Method cannot be called with new.")
            }
        },
        enumerable: false,
        writable: true,
        configurable: true
    })

    return CreatePersonClass2;
}())

let person = new class {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}("Nicholas");

person.sayName()


class CustomHTMLElement {
    constructor(element) {
        this.element = element;
    }

    get html() {
        return this.element;
    }

    set html(value) {
        this.element = value;
    }
}


let CustomHTMLElement1 = (function(){
    "use strict";
    let CustomHTMLElement2 = function(value) {
        if(typeof new.target === "undefined") {
            throw new Error("Constructor must be called with new.")
        }
        this.value = value;
    }

    Object.defineProperty(CustomHTMLElement2.prototype, 'html', {
        configurable: true,
        enumerable: false,
        get: function() {
            return this.value;
        },
        set: function(value) {
            this.value = value
        }
    })

    return CustomHTMLElement2;
}())

let custom = new CustomHTMLElement('p')
for(let key in custom) {
    console.log(key)
}


// inheritance with derived classes

function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function() {
    return this.length * this.width;
}

function Square(length) {
    Rectangle.call(this, length, length);
}

Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
        value: Square,
        enumerable: true,
        writable: true,
        configurable: true
    }
})


*/

/**
 * class Square extends Rectangle {
 *      
 * }
 * 
 * is equivalent to
 * 
 * class Square extends Rectangle {
 *      contructor(...args) {
 *          super(...args)
 *      }
 * }


class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width
    }

    static create(length) {
        return new Square(length)
    }
}

function getBase() {
    return Rectangle;
}

class Square extends getBase() {
    constructor(length) {
        super(length, length)
    }

    getArea() {
        return super.getArea();
    }
}

let square = new Square(10)
let square1 = Square.create(10);
console.log(square1);

let SerializableMixin = {
    serialize() {
        return JSON.stringify(this)
    }
}

let AreaMixin = {
    getArea() {
        return this.length * this.width
    }
}

function mixin(...obj) {
    let base = function() {}
    Object.assign(base.prototype, ...obj)
    return base;
}

class Square extends mixin(SerializableMixin, AreaMixin) {
    constructor(length) {
        super()
        this.length = length
        this.width = length
    }
}

 */

class Rectangle {
    constructor(length, width) {
        try {
            if(new.target !== Rectangle) {
                throw new Error("This class cannot be instantiated directly.")
            }       
        } catch (error) {
            console.log(error.message)
        }
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length)

    }
}
let rec = new Rectangle(10, 10);

let square = new Square(10);
console.log(square.getArea());