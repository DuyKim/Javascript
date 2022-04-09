const p1 = new Promise((resolve, reject) => {
	resolve('value of p1');
	const p2 = new Promise((resolve, reject) => {
		resolve('the second promise in p1');
	})

	p2.then(value => console.log(value))
        .then(value => console.log('value p2'))
        .then(value => console.log('value value p2'))
})

const p2 = new Promise((resolve, reject) => {
	resolve('value of p2');
	const p3 = new Promise((resolve, reject) => {
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
    .then(value => console.log('then then then p2'))
	console.log(value);
})

p1.then(value => {
	p1.then(value => console.log('then in then of p1'))
	console.log(`the first then of p1 is ${value}`)
});