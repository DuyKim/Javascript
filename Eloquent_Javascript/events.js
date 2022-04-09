const btn = document.querySelector('button')

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
}

function changeBackgroundColor(e) {
    console.log(e);
    document.body.style.backgroundColor = randomRGB();
}
// btn.addEventListener('click', function () {
//     console.log(randomRGB());
//     document.body.style.backgroundColor = randomRGB();
// })
// btn.addEventListener('focus', function () {
//     setTimeout(() => {
//         document.body.style.backgroundColor = randomRGB();
//     }, 1000);
// })
// btn.addEventListener('blur', function () {
//     console.log(randomRGB());
//     document.body.style.backgroundColor = randomRGB();
// })

// btn.addEventListener('dblclick', function() {
//     document.body.style.backgroundColor = randomRGB();
// })



// btn.addEventListener('mouseover', changeBackgroundColor)
// btn.addEventListener('mouseout', changeBackgroundColor)
// btn.addEventListener('mousedown', changeBackgroundColor)
let controller = new AbortController();

btn.addEventListener('mouseup', changeBackgroundColor, { signal: controller.signal })

// removeEventListener
// controller.abort();

// test this keyword
// btn.addEventListener('mouseup', () => {
//     console.log(this)
//     document.body.style.backgroundColor = randomRGB();
// })

// event handler properties
btn.onclick = changeBackgroundColor;

// inline event handlers
// <button onclick="randomRGB()">Click me</button>

// let btnAll = document.querySelectorAll('button')
// for(let btn of btnAll) {
//     btn.addEventListener('click', changeBackgroundColor)
// }

const textBox = document.querySelector('#textBox')
const output = document.querySelector('#output')

textBox.addEventListener('keydown', event => output.textContent = `You pressed ${event.key}`)

function $(selector) {
    return document.querySelector(selector)
}

const form = $('form')
const fname = $('#fname')
const lname = $('#lname')
const para = $('#paragraph') 

form.addEventListener('submit', e => {
    console.log(e);
    if(fname.value === '' || lname.value === '') {
        e.preventDefault();
        para.textContent = 'You need to fill in both names!'
    }
})

const output1 = document.querySelector('#output1');
function handleClick(e) {
    e.stopPropagation();
  output1.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector('#container');
const button1 = document.querySelector('.click');

document.body.addEventListener('click', handleClick, true)
container.addEventListener('click', handleClick, true);
button1.addEventListener('click', () => {output1.textContent += '1\n'}, true);

const btn1 = document.querySelector('.off');

// Add your code here
    const stack = ['Machine is on']
btn1.addEventListener('click', e => {
stack.push(e.currentTarget.textContent);
e.currentTarget.textContent = stack.shift();
console.log('this', this)
console.log(e);


})

// Bubble and capture event

// capture 
// btn.addEventListener('click', function, true)

// Bubble: default
// btn.addEventListener('click', function, fasle)
// btn.addEventListener('click', function)














