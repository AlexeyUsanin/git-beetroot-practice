const request = fetch('https://jsonplaceholder.typicode.com/users');
// console.log('request', request)

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


function makeSearch(value) {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=045fa3048d68107b3e16130861ad8e7a&query=${value}&page=2`)
    .then(function () {

  })

}
