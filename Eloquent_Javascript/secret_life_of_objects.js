/**
 * class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
Rabbit.prototype.teeth = "small";
Rabbit.prototype.arr = [1, 2];
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// small

console.log(killerRabbit.arr);
killerRabbit.arr = [20, 10];
console.log(killerRabbit.arr);

console.log(blackRabbit.arr[1]);
console.log(Rabbit.prototype.arr[1]);

Array.prototype.toString == Object.prototype.toString // false

Object.prototype.toString.call([1, 2])

function test({type, name}) {
    type[0] = "medium"
    name = "jean"
    console.log(type);
    console.log(name);
    return true;
}

let node = {
    type: ['special'],
    name: 'T-shirt'
}

let type, name;

test({type, name } = node);
console.log(type);
console.log(name);


let node = {
    type: 'Indentifier',
    name: 'foo',
    loc: {
        start: {
            line: 1, 
            column: 1
        },
        end: {
            line: 1,
            column: 4
        }
    }
}

let {type: localType, name: localName, loc: {start : localStart}} = node;

localStart.line = 2;
localStart.column = 20;

console.log(node.loc.start.line);

let colors = ['red', 'green', 'blue']  
let first, second;
[first, second] = colors
console.log(first);
console.log(second);

let cloneColors = [...colors]
console.log(cloneColors === colors);


// sets and maps

let set = new Set([1, 2])

let procesor = {
    output(value) {
        console.log(value);
    },
    process(dataSet) {
        dataSet.forEach(value => this.output(value))
    }
}

procesor.process(set)

// converting a set to an Array

let sets = new Set([1, 2, 3, 4, 5, 6, 7])
let array = [...set]

console.log(array);


function eliminateDuplicates(items) {
    return [ ... new Set(items)]
}

let set = new Set()
let key = {"1": 1}
let key1 = {}, key2 = {}
set.add(key)
set.add(key1);
set.add(key2)
key["1"] = 2;
key = null
set.add(10)
console.log([...set]);


let weakSet = new WeakSet();
let key = {};
let key1 = {}
weakSet.add(key);
// weakSet.add(key1)
weakSet.add(1)
key = null;
console.log(weakSet);
*/

let map = new Map([[{}, {}],[[], []]]);

let key = {};
let value = 10;

map.set(key, value)
let cloneMap = [...map].flat()
console.log(cloneMap);
map.forEach((value, key) => {
    console.log(key+ " " + value);
})

let weakMap = new WeakMap();











