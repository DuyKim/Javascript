function $(selector) {
	return document.querySelector(selector);
}

let train = $('.train');

let start = Date.now();

let animateText = $('#animateText');
let textExample = $('#textExample');

//let timer = setInterval(function() {
//	let timePassed = Date.now() - start;
//
//	if(timePassed >= 5000) {
//		clearInterval(timer);
//		return;
//	}
//
//	draw(timePassed);
//}, 20);

function draw(timePassed) {
	train.style.transform = `translateX(${timePassed * 100 + '%'})`;
}

function animate({timing, draw, duration}) {
	let start = performance.now();

	requestAnimationFrame(function animate(time) {
		let timeFraction = (time - start) / duration;
		if(timeFraction > 1) timeFraction = 1;

		let progress = timing(timeFraction);
		draw(progress);

		if(timeFraction < 1) requestAnimationFrame(animate)
	});
}

function linear(timeFraction) {
	return timeFraction;
}

function quad(timeFraction) {
	return Math.pow(timeFraction, 2);
}

function circ(timeFraction) {
	return 1 - Math.sin(Math.acos(timeFraction));
}

function back(x, timeFraction) {
	return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
}

 function bounce(timeFraction) {
      for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
      }
    }

function elastic(x, timeFraction) {
	return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction)
}

function makeEaseOut(timing) {
	return function(timeFraction) {
		return 1 - timing(1 - timeFraction);
	}
}

function makeEaseInOut(timing) {
	return function(timeFraction) {
		if(timeFraction < 0.5) {
			return timing( 2 * timeFraction) / 2;
		} else {
			return (2 - timing(2 * ( 1 - timeFraction)))/ 2;
		}
	}
}

let timingArr = [linear, quad, circ, bounce];

let duration = 5000;
let timingIndex = Math.floor(Math.random() * timingArr.length);
console.log(timingIndex);

train.addEventListener('click', animate({timing: timingArr[timingIndex], draw, duration}));

animateText.addEventListener('click', function(e) {
	let text = textExample.value;
	let to = text.length,
		from = 0;

	animate({timing: bounce, draw, duration: 5000});

	function draw(progress) {
		let result = (to - from) * progress + from;
		
		textExample.value = text.substr(0, Math.ceil(result));
	}
});














