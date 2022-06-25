const request = fetch('https://jsonplaceholder.typicode.com/users');

const API_KEY = '045fa3048d68107b3e16130861ad8e7a';
const API_URL = 'https://api.themoviedb.org/3';

request.then(function (response) {
  console.log('response', response)

  if (response.status >= 400 && response.status <= 499) {
    throw Error('Client error')
  } else if (response.status >= 500 && response.status <= 599) {
    throw Error('Server error')
  }

  return response.json();
}).then(function (data) {
  console.log('data', data)
  const list = document.createElement('ul');

  for (const el of data) {
    const listItem = document.createElement('li');
    listItem.innerText = el.name;

    list.append(listItem);
  }

  document.body.append(list);
}).catch(function (error) {
  console.log('error', error);
  document.write(error);
  // if (error === 404) {
  //   document.write('404! NOT FOUND!');
  // } else if (error === 500) {
  //   document.write('500! SERVER ERROR!');

  // }
  // console.log('404! NOT FOUND!')
})


function makeSearch(value, page) {
  fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${value}&page=${3}`)
    .then(function () {

  })
}

const input = document.querySelector('.input');

const fetchMovies = (query, region = 'UA') => {
  fetch(`${API_URL}/movie/${query}?api_key=${API_KEY}&region=${region}&query=${input.value}`)
    .then(response => response.json())
    .then(json => {
      const list = document.createElement('ul');
      const p = document.createElement('p');

      json.results.forEach(film => {
        const listItem = document.createElement('li');

        listItem.innerText = `Name: ${film.title}; Release date: ${film.release_date}`;
        list.append(listItem);
      })

      p.innerText = `Total total pages: ${json.total_pages}; Total results: ${json.total_results}`

      document.body.append(list);
      document.body.append(p);
    })
}

fetchMovies('popular', 'US');
fetchMovies('top_rated');
fetchMovies('upcoming');

