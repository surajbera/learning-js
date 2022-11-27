/* This is just an attempt to deep cloning, not an actual deep cloning */

const person = { name: 'Max', hobbies: ['Sports', 'Cooking'] }
const anotherPerson = { ...person, hobbies: [...person.hobbies] }

person.hobbies.push('Coding')

console.log('person => ', person)
console.log('anotherPerson => ', anotherPerson)

/*
  - Using spread syntax is a newer approach to copy objects, there is an old way to do this using Object.assign()
*/
const person2 = Object.assign({}, person)
console.log('person2 => ', person2)

/* 
  -> spread operator is the recommended way to clone objects 
*/
