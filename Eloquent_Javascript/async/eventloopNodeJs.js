/*setTimeout(() => console.log('first timeout'))
setTimeout(() => {
    console.log('second timeout');
    process.nextTick(function(){
	console.log('Microtask nextTick');
    })
    Promise.resolve().then(()=> console.log('Microtask promise'));
})

setTimeout(() => console.log('third timeout'));
setTimeout(() => console.log('four timeout'));
*/

Promise.resolve().then(function() {
	console.log('Promise main thread');
	process.nextTick(function(){
		console.log('next tick in promise');
	})
	Promise.resolve().then(_ => {
		console.log('promise in promise')
		Promise.resolve().then(_ => console.log('promise in then 1'))
	})
})

setTimeout(_ => {
	console.log('first timeout');
})
process.nextTick(function() {
	console.log('the console.log function in process.nextTick function');

})


Promise.resolve().then(function() {
	console.log('the second promise');
	Promise.resolve().then(function() {
		console.log('the first promise is in the second promise');
		Promise.resolve().then(() => console.log('the second promise in the second promise'));
	});

});

/*process.nextTick(() => {
	console.log('nextTick() function');
});

Promise.resolve().then(() => console.log('promise microtask'));

setTimeout(() => console.log('the first timeout'));
*/









