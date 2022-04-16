/**
 *  AJAX aabbreviated Asynchronous Javascript And XML
 *  response.text()
 *  response.json()
 *  response.formData()
 *  response.blob()
 *  response.arrayBuffer() 
 */

/**
 * Response properties:
 *  response.status
 *  response.ok - true if the status is between 200-299
 *  response.headers Map-like object with HTTP headers
 * Methods to get responses body:
 * ... as above
 * Fetch options so far:
 *  method: HTTP-method
 *  headers: an object with request headers (not any header is allowed) 
 *  body: as above
 */



const URL = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';

async function sendImageToServer(url) {
    const body = document.querySelector('body');

    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'canvasElem');
    canvas.setAttribute('width', '100');
    canvas.setAttribute('height', '80')
    canvas.setAttribute('style', 'border: 1px;');
    body.append(canvas);

    const input = document.createElement('input');
    input.type = 'button';
    input.value= 'Submit';
    input.addEventListener('click', function() {
        console.log('onsubmit');
    })
    body.append(input);

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.addEventListener('load', function() {
        // do stuff to send image to server
    })
}

async function fetchGibhubRepos(url) {
    const responseRepos = await fetch(url);
    const commits = await reponseRepos.json(); // read response body as json
    // have to normalize data that reponse from fetch() function
    alert(commits[0].author.login);
    const contentType = responseRepos.headers.get('Content-Type');
    for (let [key, value] of responseRepos.headers) {
        alert(`${key} = ${value}`)
    }
}

async function customeRequestHeaders(url) {
    const response = fetch(url, {
        headers: {
            Authentication: 'secret'
        }
        /**
         *  there's a list of forbidden HTTP headers that we can't set:
         *  1. Accept-Charset, Accept-Encoding
         *  2. Access-Control-Request-Headers
         *  3. Access-Control-Request-Method
         *  4. Connection
         *  5. Content-Length
         *  ... so on 
         *  These headers ensure proper and safe HTTP, so they are controlled exclusively by the brower.
         */
    })
}

async function postRequest(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data) 
            /**
             * if the request body is a string, then Content-Type header
             * is set to text/plain;charset=UTF-8
             */
        })

        if (response.ok) {
            return await response.json();
        } else {
            throw new Error(response.status)
        }
    } catch (error) {
        console.log(error.message);
    }
}

async function basicFetch(url) {
    try {
        let response = await fetch(url);
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error(`Http-Error: ${response.status}`)
        }
    } catch (error) {
        console.log(error.message)
    }
}

window.addEventListener('unhandledrejection', event => {
    console.log(event.reason);
})

