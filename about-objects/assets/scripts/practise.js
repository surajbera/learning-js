const movieList = document.getElementById('movie-list')
movieList.style['background-color'] = 'red' /* this is how you should actually access style property */
movieList.style.display = 'block'

const userChosenKeyName = 'level'
const person = {
	name: 'Max',
	age: 30,
	[userChosenKeyName]: '...' /* bracket notation can also be used inside object's key-value pair */,
	hobbies: ['Sports', 'Cooking'],
	greet: function () {
		alert('Hi There')
	}
}

// delete person.age /* this is how to delete an object property */
person.isAdmin = true
console.log(person)
