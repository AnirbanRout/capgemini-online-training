const add_btn = document.getElementById('load-movies')

add_btn.addEventListener('click', () => {

    const input_names = document.getElementById('movie-names').value

    if (input_names.trim() === '') {
        alert('Please enter at least one movie name.')
        return
    }

    let count = 1;

    const movie_names = input_names.split(',').map((name) => {
        return count++ + '. ' + name;
    })

    const movie_list = document.getElementById('movie-list')

    movie_names.forEach((movie) => {
        const list_item = document.createElement('li')
        list_item.textContent = movie.trim()
        movie_list.appendChild(list_item)
    })

    document.getElementById('movie-names').value = ''

})

const filter_movies = document.getElementById('filter-movies')

filter_movies.addEventListener('click', () => {
    const items = document.querySelectorAll('#movie-list li');
    const filtered_movies = Array.from(items).filter((item) => {
        return item.textContent.length > 6
    })

    const movie_list = document.getElementById('movie-list')
    movie_list.innerHTML = ''

    filtered_movies.forEach((movie) => {
        const list_item = document.createElement('li')
        list_item.textContent = movie.textContent.trim()
        movie_list.appendChild(list_item)
    })
})

const remove_btn = document.getElementById('remove-movies')

remove_btn.addEventListener('click', () => {
    const movie_list = document.getElementById('movie-list')
    if (movie_list.lastElementChild) {
        movie_list.removeChild(movie_list.lastElementChild)
    }
    else {
        alert('No movies to remove!')
    }
})