//! start with strings, numbers and booleans
// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);

// let name = "Wes";
// let name2 = name;
// console.log(name, name2);
// name = "Wesley";
// console.log(name, name2);


//! Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

//! and we want to make a copy of it.
// const team = players;

// console.log(team, team);

//! You might think we can just do something like this:
// team[3] = "Lux"
// console.log(players, team); 
//changing the copy of the array will change the original array
// oh no - we have edited the original array too! This is because that is an array reference, not an array copy. They both point to the same array!

//! So, how do we fix this? We take a copy instead!
// const team2 = players.slice(); 
// team2[3] = "lux";
// console.log(players, team2);
//another way...instead of .splice()

//! or create a new array and concat the old one in
// team3 = [].concat(players);
// team3[3] = "Bob";
// console.log(players, team3);

//! or use the new ES6 Spread
// const team4 = [...players];
// team4[3] = "Brandon"
// console.log(team4, players);

// ! last way is .from()
// const team5 = Array.from(players)
// team5[3] = "Jacie"
// console.log(team5, players);

//! The same thing goes for objects, let's say we have a person object
//! with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:

// how do we take a copy instead?
// const captain = Object.assign({}, person, {number: 99, age: 12});
// console.log(captain, person);

// We will hopefully soon see the object ...spread
// const captain = {...person}

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
// const wes = {
//     name: "Wes",
//     age: 100,
//     social: {
//         facebook: "wesbos",
//         twitter: "wesbos"
//     }
// }

// const dev = Object.assign({}, wes, {age: 38})
// console.log(wes, dev);