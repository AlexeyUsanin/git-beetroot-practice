const localStorage = window.localStorage;

// const user = {
//   name: 'Petro',
//   age: 63,
//   country: 'UK'
// }

// localStorage.setItem('user', JSON.stringify(user));

// localStorage.setItem('users', JSON.stringify([{
//     name: 'Petro',
//     age: 63,
//     country: 'UK'
//   },
//   {
//     name: 'Mykola',
//     age: 44,
//     country: 'GB'
//   }]
// ));


// console.log('users', JSON.parse(localStorage.getItem('users')));
// const storageUser = JSON.parse(localStorage.getItem('user'));

// console.log('storageUser', storageUser);
// console.log('storageUser.name', storageUser.name)
// console.log('storageUser.age', storageUser.age)
// storageUser.country

// console.log('name', name)
// console.log(localStorage.getItem('user'));
// localStorage.removeItem('user')

// localStorage.clear();
console.log('localStorage', localStorage)

////////////////// --------------------------------------------//////////////////////////////////////////////
const API_URL = 'https://jsonplaceholder.typicode.com';

const addToStorage = (id) => {
  const guests = localStorage.getItem('guests') ? localStorage.getItem('guests') : JSON.stringify([]);
  const userArray = JSON.parse(guests);
  const existingUser = userArray.find(userId => userId === id);

  if (!existingUser) {
    userArray.push(id)
  }

  localStorage.setItem('guests', JSON.stringify(userArray));
}

const renderUserList = (users) => {
  const list = document.querySelector('#user-list');

  for (let i = 0; i < users.length; i++) {
    list.insertAdjacentHTML('beforeend',
      `<li>
      <p>
          ${users[i].name}
        </p>
        <button class="add-btn">Add to guest list</button>
      </li>`)

    const buttons = document.querySelectorAll('.add-btn');

    buttons[i].addEventListener('click', function() {
      addToStorage(users[i].id)
    })
  }
}

// const getUsers = () => fetch(`${API_URL}/users`)
//   .then(response => response.json())
//   .then(data => renderUserList(data))

// getUsers()