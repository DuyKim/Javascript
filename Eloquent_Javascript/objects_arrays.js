let dummyData = [
    { "events": ["carrot", "exercise", "weekend"], "squirrel": false },
    { "events": ["bread", "pudding", "brushed teeth", "weekend", "touched tree"], "squirrel": false },
    { "events": ["carrot", "nachos", "brushed teeth", "cycling", "weekend"], "squirrel": false },
    { "events": ["brussel sprouts", "ice cream", "brushed teeth", "computer", "weekend"], "squirrel": false },
    { "events": ["potatoes", "candy", "brushed teeth", "exercise", "weekend", "dentist"], "squirrel": false },
    { "events": ["brussel sprouts", "pudding", "brushed teeth", "running", "weekend"], "squirrel": false },
    { "events": ["pizza", "brushed teeth", "computer", "work", "touched tree"], "squirrel": false },
    { "events": ["bread", "beer", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["cauliflower", "brushed teeth", "work"], "squirrel": false },
    { "events": ["pizza", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["lasagna", "nachos", "brushed teeth", "work"], "squirrel": false },
    { "events": ["brushed teeth", "weekend", "touched tree"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "television", "weekend"], "squirrel": false },
    { "events": ["spaghetti", "brushed teeth", "work"], "squirrel": false },
    { "events": ["brushed teeth", "computer", "work"], "squirrel": false },
    { "events": ["lettuce", "nachos", "brushed teeth", "work"], "squirrel": false },
    { "events": ["carrot", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["brushed teeth", "work"], "squirrel": false },
    { "events": ["cauliflower", "reading", "weekend"], "squirrel": false },
    { "events": ["bread", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["lasagna", "brushed teeth", "exercise", "work"], "squirrel": false },
    { "events": ["spaghetti", "brushed teeth", "reading", "work"], "squirrel": false },
    { "events": ["carrot", "ice cream", "brushed teeth", "television", "work"], "squirrel": false },
    { "events": ["spaghetti", "nachos", "work"], "squirrel": false },
    { "events": ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["spaghetti", "peanuts", "computer", "weekend"], "squirrel": true },
    { "events": ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"], "squirrel": false },
    { "events": ["potatoes", "ice cream", "brushed teeth", "work"], "squirrel": false },
    { "events": ["peanuts", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["potatoes", "exercise", "work"], "squirrel": false },
    { "events": ["pizza", "ice cream", "computer", "work"], "squirrel": false },
    { "events": ["lasagna", "ice cream", "work"], "squirrel": false },
    { "events": ["cauliflower", "candy", "reading", "weekend"], "squirrel": false },
    { "events": ["lasagna", "nachos", "brushed teeth", "running", "weekend"], "squirrel": false },
    { "events": ["potatoes", "brushed teeth", "work"], "squirrel": false },
    { "events": ["carrot", "work"], "squirrel": false },
    { "events": ["pizza", "beer", "work", "dentist"], "squirrel": false },
    { "events": ["lasagna", "pudding", "cycling", "work"], "squirrel": false },
    { "events": ["spaghetti", "brushed teeth", "reading", "work"], "squirrel": false },
    { "events": ["spaghetti", "pudding", "television", "weekend"], "squirrel": false },
    { "events": ["bread", "brushed teeth", "exercise", "weekend"], "squirrel": false },
    { "events": ["lasagna", "peanuts", "work"], "squirrel": true },
    { "events": ["pizza", "work"], "squirrel": false },
    { "events": ["potatoes", "exercise", "work"], "squirrel": false },
    { "events": ["brushed teeth", "exercise", "work"], "squirrel": false },
    { "events": ["spaghetti", "brushed teeth", "television", "work"], "squirrel": false },
    { "events": ["pizza", "cycling", "weekend"], "squirrel": false },
    { "events": ["carrot", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["carrot", "beer", "brushed teeth", "work"], "squirrel": false },
    { "events": ["pizza", "peanuts", "candy", "work"], "squirrel": true },
    { "events": ["carrot", "peanuts", "brushed teeth", "reading", "work"], "squirrel": false },
    { "events": ["potatoes", "peanuts", "brushed teeth", "work"], "squirrel": false },
    { "events": ["carrot", "nachos", "brushed teeth", "exercise", "work"], "squirrel": false },
    { "events": ["pizza", "peanuts", "brushed teeth", "television", "weekend"], "squirrel": false },
    { "events": ["lasagna", "brushed teeth", "cycling", "weekend"], "squirrel": false },
    { "events": ["cauliflower", "peanuts", "brushed teeth", "computer", "work", "touched tree"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "television", "work"], "squirrel": false },
    { "events": ["potatoes", "brushed teeth", "computer", "work"], "squirrel": false },
    { "events": ["bread", "candy", "work"], "squirrel": false },
    { "events": ["potatoes", "nachos", "work"], "squirrel": false },
    { "events": ["carrot", "pudding", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"], "squirrel": false },
    { "events": ["brussel sprouts", "running", "work"], "squirrel": false },
    { "events": ["brushed teeth", "work"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["candy", "brushed teeth", "work"], "squirrel": false },
    { "events": ["brussel sprouts", "brushed teeth", "computer", "work"], "squirrel": false },
    { "events": ["bread", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["cauliflower", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["spaghetti", "candy", "television", "work", "touched tree"], "squirrel": false },
    { "events": ["carrot", "pudding", "brushed teeth", "work"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "work"], "squirrel": false },
    { "events": ["carrot", "ice cream", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["pizza", "brushed teeth", "work"], "squirrel": false },
    { "events": ["spaghetti", "peanuts", "exercise", "weekend"], "squirrel": true },
    { "events": ["bread", "beer", "computer", "weekend", "touched tree"], "squirrel": false },
    { "events": ["brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"], "squirrel": false },
    { "events": ["lasagna", "brushed teeth", "television", "work"], "squirrel": false },
    { "events": ["cauliflower", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["carrot", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["carrot", "reading", "weekend"], "squirrel": false },
    { "events": ["carrot", "peanuts", "reading", "weekend"], "squirrel": true },
    { "events": ["potatoes", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["lasagna", "ice cream", "work", "touched tree"], "squirrel": false },
    { "events": ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["pizza", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "work"], "squirrel": false },
    { "events": ["bread", "brushed teeth", "television", "weekend"], "squirrel": false },
    { "events": ["cauliflower", "peanuts", "brushed teeth", "weekend"], "squirrel": false }
];

/**
 * let description = {
    work: 'Went to work',
    "touched tree": 'Touched a tree',
    squirrel: false
}

console.log(description.work);
console.log(description['touched tree']);
console.log('touched tree' in description);
delete description['touched tree'];

let sourceObject = {events: ['work', 'beer']};
let targetObject = Object.assign(description, sourceObject)

console.log(targetObject == description);
sourceObject['events'].push('brushing teeth');
console.log(targetObject);
console.log(description);


let journal = [];

function addEntry(events, squirrel) {
    journal.push({events, squirrel})
}

function phi(table) {
    return (table[3]*table[0] - table[1] * table[2]) / Math.sqrt(
        (table[2] + table[3]) * 
        (table[0] + table[1]) * 
        (table[1] + table[3]) * 
        (table[0] + table[2])
    );
}

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    // for(let i = 0; i < journal.length; i++) {
    //     let entry = journal[i], index = 0;
    //     if(entry.events.includes(event)) index += 1;
    //     if(entry.squirrel) index += 2;
    //     table[index] += 1;
    // }
    for(let entry of journal) {
        let index = 0;
        if(entry.events.includes(event)) index += 1;
        if(entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

function journalEvents(journal) {
    let events = [];
    for(let entry of journal) {
        for (let event of entry.events) {
            if(!events.includes(event)) events.push(event);
        }
    }
    return events;
}

function Correlation() {
    for(let event of journalEvents(dummyData)) {
        let table = tableFor(event, dummyData);
        let correlation = phi(table);
        if(correlation > 0.1 || correlation < -0.1) {
            console.log(event + " : ", correlation);
        }
    }
}

Correlation()

for of : for array to pick values
for in : for array and for object to pick indexs and keys


console.log([4, 3,10, 5, 10, 0].indexOf(10));
function mutableArr(arr1) {
    let arr = arr1;
    arr[0] = 1;
    return arr;
}

let arr = [0, 1, 2]
mutableArr(arr);
console.log(arr);

// rest paramater
function max(...numbers) {
    let result = -Infinity;
    for(let number of numbers) {
        if(result < number) {
            result = number;
        }
    }
    return result;
}

console.log(max(...[1,30, 2,3 ,45, 5, 10]));
// destructuring
let {name, age} = {name: 'kim', sex: 'male', age: 23}
let [a,_, b] = [1, 2, 3]
console.log(name);
console.log(a, b);
console.log(age);

in operator to use for key in object and index in array



// Deep comparison
// 

const deepEqual = function (x, y) {
    if (x === y) {
        return true;
    }
    else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
        if (Object.keys(x).length != Object.keys(y).length)
            return false;

        for (let prop in x) {
            if (y.hasOwnProperty(prop)) {
                if (!deepEqual(x[prop], y[prop]))
                    return false;
            }
            else
                return false;
        }

        return true;
    }
    else
        return false;
}


let obj1 = { "squirrel": false, "events": ["carrot", "exercise", "weekend"] }
let obj2 = { "events": ["carrot", "exercise", "weekend"], "squirrel": false }




function flatDeep(arr) {
    let stack = [...arr];
    let res = [];

    while(stack.length) {
        let next = stack.pop();
        if(Array.isArray(next)) stack.push(...next)
        else res.push(next)
    }

    return res.reverse();
}

function FlatDeep(arr, deep = 1) {
    // if(deep == 0) return arr.slice();
    // if(deep > 0) {
    //     return arr.reduce( (acc, val) => {
    //         return acc.concat( Array.isArray(val) ? flatDeep(val, deep - 1) : val )
    //     }, [])
    // }

    return deep > 0 ? arr.reduce(
        (acc, val) => acc.concat(
            Array.isArray(val) ? flatDeep(val, deep - 1) : val
        ), []
    ) : arr.slice();
}

const arr = [1, 2, [3, 4, [5, 6]]];

console.log(FlatDeep(arr, Infinity));


const arr = [[1,2], [3, 4]]

console.log(arr.map((element, index) => {
    element.push(index)
    return element
}));
console.log(arr);

const arr = [[1,2], [3, 4]]
let sum = arr
            .flat()
            .reduce((acc, currentVal) => acc + currentVal)
console.log(sum);        

const getMax = (a, b) => Math.max(a, b);

[1, 100].reduce(getMax, 10)
let initialVal = 0;
let sum = [{x : 1}, {x: 2}, {x: 3}].reduce( (acc, currentVal) => acc + currentVal.x, 0 )

console.log(sum);


let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce((acc, val) => {


    if (!acc[val]) {
        acc[val] = 1
    } else {
        acc[val] += 1;
    }

    return acc;
}, {});

let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];

const groupBy = (arr, property) => {
    return arr.reduce((acc, currentVal) => {
        let key = currentVal[property];
        if(!acc[key]) {
            acc[key] = []
        }
        acc[key].push(currentVal)
        return acc;
    } ,{});
};

console.log(groupBy(people, 'age'));


let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}]

let books = friends.reduce( (acc, current) => {
    return [...acc, ...current.books]
} , []);
console.log(books);


let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']

let arr = myArray.reduce((acc, element) => {
    if(!acc.includes(element)) {
        acc.push(element)
    }

    return acc;
}, [])

console.log(arr);

const numbers = [-5, 6, 2, 0]

const doubledPositiveNumbers = numbers.reduce((acc, current) => {
    if(current > 0) {
        acc.push(current * 2)
    }
    return acc;
}, [])

// running promises in sequence

// reduce's like a pipe.
function runPromiseInSequence(arr, input) {
    return arr.reduce((promiseChain, currentFn) =>{
        return promiseChain.then(currentFn)
    }, Promise.resolve(input))
}

let runPromiseInSequenceAnother = arr => input => arr.reduce((promiseChain, fn) => promiseChain.then(fn), Promise.resolve(input))

function p(a) {
    return new Promise((resolve, reject) => resolve(a * 5))
}
function p1(a) {
    return new Promise(resolve => resolve(a * 50))
}
function p2(a) {
    return a * 10
}

const promiseArr = [p, p1, p2]
console.log(runPromiseInSequence(promiseArr, 10));

*/

// function composition enabling piping

const double = x => x + x;
const tripple = x => x * 3;
const quadruple = x => x * 4;

const pipe = (...functions) => initialValue => functions.reduce((acc, fn) => fn(acc), initialValue);

const muttiple6 = pipe(double, tripple)

// console.log(muttiple6(6));

// Object to primitive conversion

// three hints: string, number, default

/**
 * Call obj[Symbol.toPrimitive](hint) - the method with the symbolic key Symbol.toPrimitive, if such method exits
 * hint: string (for alert and other operations that need a string)
 *      try obj.toString() and obj.valueOf(), whatever exists
 * hint: number(for maths) or default (few operators)
 *      try obj.valueOf() and obj.toString(), whatever exists
 */

// option 1:
let user = {
    name: 'Jonhn',
    money: 1000,
    [Symbol.toPrimitive] (hint) {
        return hint == 'string' ? this.name : this.money
    }
}

// option 2:
let user2 = {
    name: 'John',
    money: 1000,
    valueOf() {
        return this.money
    },
    toString() {
        return this.name
    }
}

// A conversion can return any primitive type, not an object.



