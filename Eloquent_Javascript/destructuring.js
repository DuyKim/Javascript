let user = {
    name: 'user',
    age: 20,
    favorite: {
        music: true,
        football: true,
        travel: true,
        book: true
    }
}

let {
    name,
    age,
    favorite: {
        music,
        football,
        travel,
        book
    },
    career = 'programmer'
} = user

console.log({name, age, music, football, travel, book, career});

function display({
    name,
    age,
    favorite: {
        music,
        football,
        travel,
        book
    },
    career = 'programmer'
}) {
    console.log(`${name}${age}${music}${football}${travel}${book}${career}`);
}

display(user)

