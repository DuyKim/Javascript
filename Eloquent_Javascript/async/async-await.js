async function test() {
    console.log('hello world')
    async function test1() {
        return 'test5';
    }

    test1().then(value => console.log(value));
    let result = await Promise.resolve(1);
    let result1 = await Promise.resolve(2);
    return result1;
}

test()
    .then(value => console.log(value))

async function f() {
    return await Promise.resolve(100);
}

f().then(value => console.log(value))

let promise = new Promise((resolve, reject) => {
    resolve(10);
})

promise.then(value => console.log(value))

// let promise = new Promise((resolve, reject) => {
//     resolve(10);
// })

// let promise1 = new Promise((resolve, reject) => {
//     resolve(100);
// })

// promise.then(value => console.log(value))
// .then(value => {
//     promise.then(value => console.log('seconds' + value))
//     console.log('value01')
// })
// .then(value => console.log('value02'))

// promise1.then(value => console.log(value))
// .then(value => console.log('value11'))
// .then(value => console.log('value12'))

async function showAvatar() {
    let response = await fetch('asjfsjd');
    let user = await response.json();

    let githubResponse = await fetch(`url/${user.name}`)
    let githubUser = await githubResponse.json();

    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = 'promise-avatar-example'
    document.body.append(img);

    await new Promise((resolve, reject) => setTimeout(() => {
        resolve
    }))

    img.remove();
    return githubUser;
}

// showAvatar()
// .then(value => `Finished showing ${value.url}`)


class Thenable {
    #value;
    constructor(value) {
        this.#value = value;
    }

    then(resolve, reject) {
        // setTimeout(_ => resolve(this.#value))
        resolve(20)
    }
}

// async function test() {
//     let result = await new Thenable(10);
//     console.log(result)
// }

// test();

class Waiter {
    async wait() {
        return await Promise.resolve(1)
    }
}

new Waiter()
    .wait()
    .then(alert)

async function f() {
    try {
        let response = await fetch('skajfk'); // throw Error
        let result = await response.json();



    } catch (error) {

    }
}

f().catch(reason => reason)

window.addEventListener('unhandledrejection', function (event) {
    event.promise;
    event.reason;
})

async function loadJson(url) {
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error.message);
    }
}

async function wait() {
    await new Promise(resolve => setTimeout(() => {
        resolve
    }, 1000))
    return 10;
}

function f() {
    wait()
        .then(value => console.log(value))
}

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        return await response.json();
    }

    throw new HttpError(response);
}

async function demoGithubUser(url) {
    let user;

    while (true) {
        let name = prompt('Enter a name? ')

        try {
            user = await loadJson(`url/${name}`);
            break;
        } catch (error) {
            if (error instanceof HttpError && error.response.status === 404) {
                alert('No such user, please reenter name.')
            } else {
                throw error;
            }
        }
    }

    alert(`Full name: ${user.name}`)
    return user;
}
