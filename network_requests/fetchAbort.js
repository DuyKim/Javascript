const controller = new AbortController();
const signal = controller.signal;



async function fetchApi(url) {
    const response = await fetch(url, {
        signal: signal
    })

    setTimeout(() => {
        controller.abort();
    }, 1000);
    return await response.json();
}

/**
 * AbortController is scallable
 */

async function fetchParallel(urls) {
    let controller = new AbortController();
    const ourJob = new Promise((resolve, reject) => {
        controller.signal.addEventListener('abort', reject);
    })

    const fetchJobs = urls.map(url => fetch(url), {
        signal: controller.signal
    })
    
    // Wait for fetches and our task in parallel
    return await Promise.all([...fetchJobs, ourJob])


}

