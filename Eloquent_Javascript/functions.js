/**
const power = function(base, exponent) {
    let result = 1;
    for(let count = 0; count < exponent; count++) {
        result = result * base;
    }
    return result;
}

// function as values
const humus = function(factor) {

    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if(ingredientAmount > 1) {
            unit += 's'
        }

        console.log(`${ingredientAmount} ${unit} ${name}`);
    }

    ingredient(1, 'can', 'chickpeas');
    ingredient(0.25, 'cup', 'tahini')
    ingredient(2, 'tablespoon', 'olive oil')

}

// declare function

// function declarations are not part of the regular top to bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope. This is sometimes useful because it offers the freedom to order code in a way that seems meaningfull, without worrying about having to define all functions before they are used.
excute(hello);

function hello() {
    console.log('hello');
}

function excute(fn) {
    fn();
}

// arrow function

const square = x => x * x;

// the call stack
// optional arguments
function minus(a, b) {
    if(b === undefined) return -b;
    return a - b;
}

// closure
function closure() {
    let obj = [];
    return () => obj;
}
let closure1 = closure();
let closure2 = closure();
closure1().push('hello');
console.log(closure1());
console.log(closure2());
console.log(closure1() == closure2());

function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    // for (i = 0; i < theCelebrities.length; i++) {
    //   theCelebrities[i]["id"] = function ()  {
    //     return uniqueID + i;
    //   }
    // }
    
    for(i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]['id'] = function(j) {
            return () => uniqueID + j;
        }(i)
    }

    return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [1];
console.log(stalloneID.id());


function power(base, exponent) {
    if(exponent == 0) {
        return 1;
    } else return base * power(base, exponent - 1);
}

function findSolution(target) {
    return find(1, "1");

    function find(current, history) {
        if(current == target) return history;
        if(current > target) return null;
        if(current < target) return find(current * 3, `(${history} * 3)`) || find(current + 5, `(${history} + 5)`)
    }

}

console.log(findSolution(24));
 */

function zeroPad(number, width) {
    let string = String(number);
    while(string.length < width) {
        string = "0" + string;
    }
    return string;
}

const countChar = function(string, indicateChar) {
    let length = string.length;
    let countChar = 0;
    for(let index = 0; index < length - 1; index++) {
        if(string[index] == indicateChar) {
            countChar ++;
        }
    }

    return countChar;
}