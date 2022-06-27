const API_KEY = '045fa3048d68107b3e16130861ad8e7a';
const API_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const form = document.querySelector('#form');

const getLocalStorage = () => {
  const favoritesStorage = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];

  return favoritesStorage;
}

const isExistMovie = id => {
  const storage = getLocalStorage();
  const existingMovie = storage.find(movieId => movieId === id);

  return existingMovie;
}

const renderIcon = id => {
  const icon = !isExistMovie(id) ? `<svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/>
    </svg>` : `<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512">
      <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/>
    </svg>`;

  return icon;
}

const renderMovieCard = data =>
  `<div class="card style_1">
      <div class="image">
        <div class="wrapper">
          <img class="poster" src="${IMG_URL}${data.poster_path}" alt="${data.original_title}">
        </div>
        <div class="like-btn" title="Add to favorites">
          ${renderIcon(data.id)}
      </div>
      </div>
      <div class="content">
        <h2>
         ${data.original_title}
        </h2>
        <p>${data.release_date}</p>
      </div>
    </div>
    `;

const addToStorage = id => {
  let storage = getLocalStorage();

  if (!isExistMovie(id)) {
    storage.push(id)
  } else {
    storage = storage.filter(movieId => movieId !== id);
  }

  localStorage.setItem('favorites', JSON.stringify(storage));
}

const renderMovieList = movies => {
  const list = document.querySelector('#movie-list');
  list.innerHTML = '';

  if (movies.length === 0) {
    return list.insertAdjacentHTML('afterbegin', `<h1>No results</h1>`);
  } else {
    for (let i = 0; i < movies.length; i++) {
      const listItem = renderMovieCard(movies[i]);

      list.insertAdjacentHTML('beforeend', listItem);

      const buttons = document.querySelectorAll('.like-btn');

      buttons[i].addEventListener('click', function (event) {
        addToStorage(movies[i].id);
        this.innerHTML = renderIcon(movies[i].id);
      })
    }
  }
}

const buildPagination = (pages, current, query) => {
  const pagination = document.querySelector('.pagination');

  pagination.innerHTML = '';

  if (pages > 1) {
    for (let i = 1; i <= pages; i++) {
      const pageButton = document.createElement('button');
      pageButton.classList.add('pagination__button')
      pageButton.innerText = i;

      pageButton.addEventListener('click', function () {
        makeSearch(query, i);

        window.scrollTo({
          top: 100,
          behavior: 'smooth'
        });
      })

      if (i === current) {
        pageButton.classList.add('current');
      }

      pagination.append(pageButton);
    }
  }
}

function makeSearch(value, page = 1) {
  fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${value}&page=${page}`)
  .then((response) => response.json())
  .then(data => {
      renderMovieList(data.results)

      buildPagination(data.total_pages, page, value)
    })
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const query = formData.get('query');

  makeSearch(query);
});