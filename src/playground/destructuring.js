// // const person = {
// //     name: 'Tom',
// //     age: 30,
// //     location: {
// //         city: 'Holmdel',
// //         temp: 55
// //     }
// // };
// // const { name: firstName = 'Anonymous', age } = person

// // console.log(`${firstName} is ${age}.`)

// // const { city, temp: temperature } = person.location;

// // if (city && temperature) {
// //     console.log(`It's ${temperature} in ${city}`)
// // }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName); // Penguin, default value of: Self-Published


// const address = [];

// const [ , , state = "New Jersey" ] = address;

// console.log(`You are in ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ detail, , medium ] = item;

// grab first and third items using array destructuring
console.log(`A medium ${detail} costs ${medium}`);



























const [ first, , third ] = item;

console.log(`A medium ${first} costs ${third}`)




