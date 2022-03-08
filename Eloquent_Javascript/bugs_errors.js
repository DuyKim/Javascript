/**
 * "use strict"
 * 
 function Person(name) {
     this.name = name;
 }
 
 function test(label, body) {
     if(!body()) {
         console.log(`Failed: ${label}`)
     }
     else console.log('successfully');
 }
 
 test('convert Latin text to uppercase', () => {
     return 'hello'.toUpperCase() === 'HELLO'
 })

function promptNumber(question) {
    let result = Number(prompt(question));
    if(Number.isNaN(result)) {
        return null;
    }
    return result;
}

promptNumber('enter a number: ')


try{
    try {
        throw new Error('inner try catch block')
    } catch (e) {
        console.log(e.message);
        throw new Error('outter try')
    } finally {
        console.log('finally in inner');
    }
} catch (e) {
    console.log('outer', e.message);
} finally {
    console.log('end!');
}


function ErrorHandle() {
    try{
        try {
            throw new Error('inner try catch block')
        } catch (e) {
            console.log(e.message);
            throw new Error('outter try');
        } finally {
            console.log('finally in inner');
        }
    } catch (e) {
        console.log('outer', e.message);
    } finally {
        console.log('end!');

    }
}

ErrorHandle();
 */

// class Error {
//     constructor(message) {
//         this.message = message;
//         this.name = 'Error'
//         this.stack = [];
//     }
// }

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = new.target.name
    }
}

// let validation = new ValidationError('jfkasjd')
// console.log(validation.name);

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super('No property: ' + property);
        // this.name = 'PropertyRequiredError';
        this.property = property;
    }
}

function readUser(json) {
    let user = JSON.parse(json);

    if(!user.name) {
        throw new PropertyRequiredError('name')
    }

    if(!user.age) {
        throw new PropertyRequiredError('age')
    }
    return user;
}

// try {
//     let user = readUser('{age: 30}')
// } catch (e) {
//     if(e instanceof ValidationError) {
//         console.log('Invalid data: ' + e.message)
//     }
//     else if (e.name == 'SyntaxError') {
//         console.log('JSON Syntax Error: ' + e.message)
//     } else throw e;
// }

let arr = [];
console.log(arr[1]);


