/**
 * new Promise( executor ) 
 *							state: fulfilled
							result: value
 *			...		if resolve has value. 
 *	state: pending
 *  result: undefined 
 *				.... if reject has error
							state: rejected
							result: error
 * 
 */

// setTimeout(_ => {
// 	console.log('first timeout');
// })

/*
const p1 = new Promise((resolve, reject) => {
	console.log('p1');
	// setTimeout(function () {
	// 	resolve('the first promise');
	// }, 0)
	resolve('value of p1');
	const p2 = new Promise((resolve, reject) => {
		// console.log('p2 in p1')
		resolve('the second promise in p1');
	})
	p2.then(value => console.log(value));
	setTimeout(_ => console.log('timeout'))
})


setTimeout(_ => console.log('timeout 1'))
const p2 = new Promise((resolve, reject) => {
	console.log('p2');
	resolve('value of p2');
	const p3 = new Promise((resolve, reject) => {
		// console.log('p3 in p2');
		resolve('the second promise in p3')
		const p4 = new Promise((resolve, reject) => {
			resolve('value of p4')
		})
		p4.then(value => console.log(value))
	})
	p3.then(value => console.log(value))
})

p2.then(value => {
	p2.then(value => console.log('then in then p2'))
	console.log(value);
})

p1.then(value => {
	p1.then(value => console.log('then in then of p1'))
	console.log(`the first then of p1 is ${value}`)
});
*/
/*
p2.then(data => console.log(data));
p3.then(data => console.log(data));
p1.then(data => console.log(data));
*/

// function add(xPromise, yPromise) {
// 	return Promise.all([xPromise, yPromise]) // composing future value.
// 			.then(function(values) {
// 				return values[0] + values[1]
// 			})
// }

// add(fetchX(), fetchY())
// 	.then(sum => console.log(sum));
// Once Promise is resolved, it becomes an immutable value at that point and
// can be observed as many times as necessary that it cannot be modified
// accidentally or maliciously.

let promise = new Promise((resolve, reject) => {
	resolve(10);
})

promise.then(
	// fulfilled function
	function (value) {
		console.log(value);
	},
	// rejected function
	function (reason) {
		console.log(reason);
	})

promise.then(
	null,
	// rejected function
	function (reason) {
		console.log(reason);
	}
)

promise.catch(reason => console.log(reason))

function loadScript(script) {
	return new Promise((resolve, reject) => {
		let script = document.createElement('script');
		script.src = script;

		script.onload = () => resolve(script);
		script.onerror = () => reject(new Error('Oops'))

		document.head.appendChild(script);

	})
}

let load = loadScript('jfksdjf')
load.then(value => console.log(value))
	.catch(reason => console.error(reason))


class Thenable {
	#value;
	#reason;

	constructor(value, reason) {
		this.#value = value;
		this.#reason = reason;
	}

	then(resolve, reject) {
		if (resolve) resolve(this.#value)
		if (reject) reject(this.#reason)
	}
}

Promise.resolve(new Thenable(10))
		.then(alert)

fetch('/article/promise-chaining/user.json')
	.then(response => response.json())
	.then(user => fetch(`https://api.github.com/users/${user.name}`))
	.then(response => response.json())
	.then(githubUser => new Promise((resolve, reject) => {
		let img = document.createElement('img')
		img.src = githubUser.avatar_url;
		img.className = 'promise-avatar-example';
		document.body.append(img);

		setTimeout(_ => {
			img.remove();
			resolve(githubUser);
		}, 3000)
	}))
	.then(githubUser => alert(`Finished show ing ${githubUser.name}`))
	.catch(reason => {
		if (reason instanceof URIError) {
			// handling error
		} else {
			// handling error
		}
		throw new URIError('ad')
	})
	.then(() => {
		// doesn't run here
	})
	.catch(reason => {
		// 
	})


/*
	There are 6 static methods of Promise class:
		Promise.all(promises) -- waits for all promises to resolve and returns
		an array of their results.

		Promise.allSettled(promises) -- waits for all promises to settle and returns their results as an array of objects with: 
			status: 'fulfilled' or 'rejected'
			value: (if fulfilled) or reason (if rejected)

		Promise.race(promises) -- waits for the first promise to settle, and its result/error becomes the outcome.

		Promise.any(promises) -- waits for the first promise to fulfill, and its result becomes the outcome. If all of the given promises are rejected, AggregateError becomes the error of Promise.any

		Promise.resolve

		Promise.reject
*/

let urls = [
	'https://api.github.com/users/iliakan',
	'https://api.github.com/users/remy',
	'https://api.github.com/users/jeresig'
]

let requests = urls.map(url => fetch(url))

// Promise.all
Promise.all(requests)
	.then(responses => {
		responses.forEach(response => console.log(response))
		return responses;
	})
	.then(responses => {
		responses.forEach(response => console.log(response.text()))
		return responses;
	})
	.then(responses => {
		responses.forEach(response => console.log(response.json()))
	})
	.catch(reason => console.log(reason))

// Promise.allSettle
let cloneUrls= [...urls]
cloneUrls.push('noUrl')
Promise.allSettled(cloneUrls.map(url => fetch(url)))
	.then(responses => {
		responses.forEach(response => {
			if(response.status === 'fulfilled') {
				console.log(response.value);
			}
			if(response.status === 'rejected') {
				console.log(response.reason);
			}
		})
	})

// Promise.race
Promise.race(cloneUrls.map(url => fetch(url)))
	.then(value => console.log(value))
	.catch(reason => console.log(reason))

// Promise.any
Promise.any(cloneUrls.map(url => fetch(url)))
	.then(value => console.log(value))
	.catch(reason => {
		console.log(reason);
	})

// Promise.resolve
let cache = new Map();
function loadCached(url) {
	if(cache.has(url)) {
		return Promise.resolve(cache.get(url))
	}

	return fetch(url)
			.then(response => response.text())
			.then(text => {
				cache.set(url, text);
				return text;
			})
}

// function promisify(f) {
// 	return function(...args) {
// 		return new Promise((resolve, reject) => {
// 			function callback(reason, value) {
// 				if(reason) reject(reason)
// 				else resolve(value)
// 			}

// 			args.push(callback)
// 			f.callback(this, ...args)
// 		});
// 	}
// }

const fs = require('fs');
let readFile = new Promise((resolve, reject) => {
	fs.readFile('../promise.js', function(err, data) {
		if(err) reject(err)
		else resolve(data)
	})
})

function promisify(f) {
	return function(...args) {
		return new Promise((resolve, reject) => {
			function callback(err, data) {
				if(err) reject(err)
				else resolve(data)
			}

			args.push(callback)
			f.call(this, ...args);
		})
	}
}

let readFilePromisify = promisify(fs.readFile)
readFilePromisify('../promise.js')
	.then()
	.catch()

function promisify(f, isManyArgs) {
	return function(...args) {
		return new Promise((resolve, reject) => {
			function callback(err, ...results) {
				if(err) reject(err)
				else resolve(isManyArgs ? results : results[0])
			}
			args.push(callback)
			f.call(this, ...args)
		})
	}
}

// An “unhandled rejection” occurs when a promise error is not handled at the end of the microtask queue.
window.addEventListener('unhandledrejection', e => {
	console.log(e.reason);
})
