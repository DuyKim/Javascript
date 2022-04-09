function $(selector) {
    return document.querySelector(selector)
}

let color = $('#color')
let growing = $('#growing')
let stripe = $('#stripe')
let train = $('.train')
let boat = $('#boat')


color.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
})

growing.addEventListener('click', function() {
    this.style.fontSize = '36px';
    this.style.color = 'red';
})

stripe.addEventListener('click', function() {
    // let seconds = new Date().getSeconds() % 10;
    // this.style.transitionDelay = `-${seconds}s`; 
    this.classList.toggle('animate');
    // this.addEventListener('transitionend', function() {
    //     this.classList.remove('animate')
    // })
})

train.addEventListener('click', function() {
    this.style.left = '450px';
})

boat.addEventListener('click', function() {
    this.classList.toggle('move')
})