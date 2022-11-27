let dog = 'gohan the husky';

const person = {
  age: 27,
  name: 'Suraj',
  'cool-dude': true,
  'really cool': true,
  '777': 'hello',
  777: 'test', /* will override above key-value pair */
  dog: 'gohan the husky',
  [dog]: 'Gohan the husky is a good dog',
  note: 'Order is in alphabetic order'
}
person.job = 'Expert Web Devleoper'
// console.log(person);

// Object.freeze(person)
/* NOTE: person obj is now immutable */

// console.log(person['cool-dude']);
// console.log(person['really cool']);

// let value = prompt('Which property do you want to check?')
// person[value] ? console.log(person[value]) : console.log('No property by that name');

const nameInput = document.querySelector('[name="first"]')
const name1 = nameInput ? nameInput.value : ""
console.log(name1);

delete person['777']

console.log(person)