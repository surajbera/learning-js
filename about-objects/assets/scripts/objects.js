const addMovieBtn = document.getElementById('add-movie-btn')
const searchBtn = document.getElementById('serach-btn')

const movies = []

const renderMovies = () => {
	const movieList = document.getElementById('movie-list')
	movieList.innerHTML = '' /* just done to save some time */

	if (movies.length === 0) {
		movieList.classList.remove('visible')
		return
	} else {
		movieList.classList.add('visible')
	}

	movies.forEach(movie => {
		const movieEl = document.createElement('li')
		movieEl.textContent = movie.info.title
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
		id: Math.floor(Math.random() * 20000000000)
	}

	movies.push(newMovie)
	renderMovies()
}

addMovieBtn.addEventListener('click', addMoviehandler)
