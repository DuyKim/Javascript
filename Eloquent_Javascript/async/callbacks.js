function loadScript(src, callback) {
	let script = document.creatElement('script');
	script.src = src;

	script.onload = () => callback(script);

	document.head.append(script);
}

loadScript('/my/script.js', function () {
	//			


});

loadScript(url, script => {
	alert(`Cool, the script ${script.src} is loaded`);
});

loadScript('/my/script.js', script => {
	//....
	loadScript('/my/scrip2.js', script => {
		//...
	})

})

// Handling errors.
function loadScriptHandlingError(src, callback) {
	let script = document.creatElement('script');
	script.src = src;

	script.onload = () => callback(null, src);
	script.onprogress
	script.onloadend
	script.onloadstart
	script.onerror = () => callback(new Error(`Script load error for ${src}`));

	document.head.append(script);
}

loadScriptHandlingError('/my/script.js', function (error, script) {
	if (error) {
		//handle error
		console.log(error.message)
	}
	if (script) {
		//script loaded successfully		
		console.log(script);
		loadScriptHandlingError('/my/scrip2.js', function (error, script) {
			if (error) {
				//handle error
				console.log(error.message)
			}
			if (script) {
				//script loaded successfully		
				console.log(script);
				loadScriptHandlingError('/my/scrip3.js', function (error, script) {
					// callback hell
					console.log('OMG!!!')
				})
			}
		})
	}
})

loadScriptHandlingError('1.js', step1);
function step1(error, script) {
	if(error) console.log(error.message);
	if(script) {
		loadScriptHandlingError('2.js', step2)
	}
}

function step2(error, script) {
	if(error) console.log(error.message);
	if(script) loadScriptHandlingError('3.js', step3)
}

function step3(error, script) {
	if(error) console.log(error.message);
	if(script) loadScriptHandlingError('3.js', step4)
}



const xhrButtonSuccess = document.querySelector('.xhr.success');
const xhrButtonError = document.querySelector('.xhr.error');
const xhrButtonAbort = document.querySelector('.xhr.abort');
const log = document.querySelector('.event-log');

function handlePendingEvent(e) {
	log.textContent = log.textContent + `${e.type}: ${e.loaded} bytes tranferred\n`;
}

function handleSuccessEvent(data) {
	// handle data
	console.log(data);

	// calls another url
	runXHR('url', function() {}, function(){}, function() {})
}

function handleFailEvent(error) {
	console.log(error.message);
}

runXHR('url', handlePendingEvent, handleSuccessEvent, handleFailEvent)

function runXHR(url, pending, success, fail) {
	log.textContent = '';

	const xhr = new XMLHttpRequest();
	// the events such as loadstart, load, progress, loadend, error will move to webapi stack
	xhr.addEventListener('loadstart', pending);
	xhr.addEventListener('load', pending);
	xhr.addEventListener('progress', pending);
	xhr.addEventListener('loadend', success);
	xhr.addEventListener('error', fail);

	// xhr.open will call events in the webapi stack such as loadstart event, load event, ..in the webapi stack.
	// these events is macrotask. 
	xhr.open('GET', url);
	xhr.send();

	return xhr;
}

xhrButtonSuccess.addEventListener('click', () => {
	runXHR('skjdfkjdkj.jpg');
})

xhrButtonError.addEventListener('click', () => {
	runXHR('skjdfkjdkj.jpg');
})

xhrButtonAbort.addEventListener('click', () => {
	runXHR('sjfjksjd.jpg').abort();
})





