// if([] - 0) {
//     console.log('true')
// } else console.log(false);

// let number1 = Number(prompt('enter a number that you are favorite: '));
// if(!Number.isNaN(number1)) {
//     console.log("Your number is the square root of " + number1 * number1);
// } else {
//     console.log('Hey. Why didn\'t you give me a number');
// }

// let number2 = 0;
// while(number2 < 10) {
//     console.log(number2);
//     number2 += 1;
// }

// let result_square_2 = 1;
// let counter = 0;
// while(counter < 10) {
//     result_square_2 = result_square_2 * 2;
//     counter = counter + 1;
// }
// console.log(result_square_2);

// let yourName;
// do {
//     yourName = prompt('What is your name? ')
// } while(!yourName && Number.isNaN(yourName))
// console.log(yourName);

// for (let current = 20; ; current++) {
//     if(current % 7 == 0) {
//         console.log(current);
//         break;
//     }    
// }

// switch (prompt('what is the weather like: ')) {
//     case 'rainy':
//         console.log("Remember to bring an umbrella.");      
//         break;

//     case 'sunny':
//         console.log('Dress lightly.');
//         break;

//     case 'cloudy':
//         console.log('Go outside.')
//         break;

//     default:
//         console.log("Unknow the weather type!");
//         break;
// }

// for(let row = 0; row < 7; row++) {
//     let content = '';
//     for(let count = 0; count <= row; count++) {
//         content += '#';
//     }
//     console.log(content);
// }

let sizeBoard = 16;
let contentRowBoard = [];
let typeRow1 = [];
let typeRow2 = [];
for(let index = 0; index < sizeBoard; index++) {
    if(index % 2 == 0) typeRow1.push(' ')
    else typeRow1.push('#')
}
contentRowBoard.push(typeRow1)

for(let index = 1; index <= sizeBoard; index++) {
    if(index % 2 != 0) typeRow2.push('#')
    else typeRow2.push(' ')
}
contentRowBoard.push(typeRow2)

for(let row = 0; row < sizeBoard; row++) {
    if(row % 2 == 0) {
        console.log(contentRowBoard[0].join(''));
    } else {
        console.log(contentRowBoard[1].join(''));
    }
}