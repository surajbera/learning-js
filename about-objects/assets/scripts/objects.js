const addMovieBtn = document.getElementById('add-movie-btn')
const searchBtn = document.getElementById('search-btn')

const movies = []

const renderMovies = (searchTerm = '') => {
	const movieList = document.getElementById('movie-list')
	movieList.innerHTML = '' /* just done to save some time */

	if (movies.length === 0) {
		movieList.classList.remove('visible')
		return
	} else {
		movieList.classList.add('visible')
	}

	const filteredMovies = !searchTerm ? movies : movies.filter(movie => movie.info.title.includes(searchTerm))
	filteredMovies.forEach(movie => {
		const movieEl = document.createElement('li')
		const { info } = movie
		let text = info.title + '-'
		for (const key in info) {
			if (key != 'title') {
				text += `${key}: ${info[key]}`
			}
		}
		movieEl.textContent = text
		movieList.append(movieEl)
	})
}

const addMoviehandler = () => {
	const title = document.getElementById('title').value
	const extraName = document.getElementById('extra-name').value
	const extraValue = document.getElementById('extra-value').value

	/* validations */
	if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') return

	const newMovie = {
		info: {
			title,
			[extraName]: extraValue
		},
		id: Math.floor(Math.random() * 20000000000).toString()
	}

	movies.push(newMovie)
	renderMovies()
}

const searchMovieHandler = () => {
	const searchTerm = document.getElementById('filter-title').value
	renderMovies(searchTerm)
}

addMovieBtn.addEventListener('click', addMoviehandler)
searchBtn.addEventListener('click', searchMovieHandler)
