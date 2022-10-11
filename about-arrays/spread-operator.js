const nameFragments = ['Suraj', 'Bera', ['another', 'array']]
const copiedNameFragments = [...nameFragments] /* shallow copy */
nameFragments[2].push('Hello!!') /* will modify copiedNameFragments */

/*********************************************/

const prices = [122, 123.123, 45, 2313, 92]
console.log(Math.min(...prices))

/*********************************************/

const persons = [
	{ name: 'Max', age: 30 },
	{ name: 'Manual', age: 31 }
]
const copiedPersons = [...persons]
persons[1].name = 'Suraj' /* will modify  copiedPersons */
console.log('persons => ', persons)
console.log('copiedPersons => ', copiedPersons)

/*********************************************/
const persons2 = [
	{ name: 'Max', age: 30 },
	{ name: 'Manual', age: 31 }
]
const copiedPersons2 = persons.map(person => ({
	name: person.name,
	age: person.age
}))
persons2.push({ name: 'Anna', age: 29 })
console.log(persons2)
console.log(copiedPersons2)
