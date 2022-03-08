import {Rectangle} from "./exports.mjs";
import * as example from './exports.mjs';
import {name, setName} from './exports.mjs';
import multiply from './exports.mjs';
import './exportGlobal.mjs'

let rect = new Rectangle(10, 10);

console.log(name);

setName('greg');
console.log(name);

console.log(multiply(10, 10));

console.log(rect.getArea());

console.log(example.sum(10, 10));





