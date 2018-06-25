//
// Object Destructuring
//
// const person = {
//   name: 'Frankie',
//   age: 4,
//   location: {
//     city: 'Providence',
//     temp: 68
//   }
// };

// // const name = person.name;
// // const age = person.age;
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if(city && temperature) {
//   console.log(`It's ${temperature} in ${city}!`);
// }

// console.log(`It's ${person.location.temp} in ${person.location.city}`)
const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);
console.log("***************");

//
// Array Destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'PA', '19147'];

const [street, city, state, zip] = address;
//example of leaving 'street' out..can still use city, state, zip.
//const [, city, state, zip] = address;
//example with default as Rhode Island:
//const ['111 hope st', 'Providence, state = 'Rhode Island', 02820] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , medPrice] = item;
console.log(`A medium ${itemName} costs ${medPrice}`);
