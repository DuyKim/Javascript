let meetup = {
    title: 'Conference',
    room: {
        number: 23,
        participants: ['john', 'ann']
    }
}

JSON.stringify(meetup)
// there must be no circular references.
// JSON is data-only language-independent specification
// so some Javascript-specific object properties are skipped by JSON.stringify
// function properties (methods)
// sumbolic keys and values
// properties that store undefined.

let user = {
    sayHI() {}, // ignored
    [Symbol('id')]: 123, // ignored
    somthing: undefined // ignored
}

// Excluding and transforming

let room = {
  number: 23,
  toJSON() {
      return this.number
  }
};

let meetup1 = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room, // meetup1 references room,
  date: new Date()
};

room.occupiedBy = meetup1;
let stringify = JSON.stringify(meetup1, function(key, value) {
    return key == 'occupiedBy' ? undefined : value
}, 2)

console.log(stringify)

JSON.parse(stringify, function(key, value) {
    return key == 'date' ? new Date(value) : value
})

let json = `{
    "name": "name",
    "age": 20,
    "isAdmin": true,
    "friends": [0, 1, 2, 3] 
}`

//JSON supports plain objects, arrays, strings, numbers, null, booleans



