const every = (arr, testFn) => {
    let signal = arr.map(element => {
        if(!testFn(element)) return false;
    })
    return !signal.includes(false);
}

const arr = [2, 4, 6, 8];
console.log(every(arr, element => element % 2 == 0));