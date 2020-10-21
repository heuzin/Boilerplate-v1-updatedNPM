// const person = {
//     name: 'Matheus',
//     age: 28,
//     location: {
//         city: 'Bridgeport',
//         temp: 90
//     }
// };

// const { name = 'Anonymous', age } = person

// console.log(`${name} is ${age}.`)

// const { temp: temperature, city } = person.location

// if (city && temperature) {
//     console.log(`it is ${temperature} in ${city}`)
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName);

// ARRAY 

const address = ['106 nelson terrace', 'bridgeport', 'connectcut', '06610']

const [street, city, state, zip] = address

console.log(`You are in ${city} ${state}`)