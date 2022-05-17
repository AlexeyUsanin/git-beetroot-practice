// console.log(showName('name'));
////////////// FUNCTION DECLARATION /////////////////
function showName(name) {
  if (name === undefined) {
    return 'No name!';
  }

  alert(name);
}


////////////// FUNCTION EXPRESSION //////////////////////
// const showName = function(name) {
//   return name;
// }

// console.log(showName('sdfsf'));


function showUserData(name = 'Default name', age = 34, country = 'Uk', height = 146, weight = 65) {
  // console.log('arguments length', arguments.length);

  if (typeof age !== 'number') {
    console.error('Age must be a number');

    return;
  }

  if (typeof name !== 'string') {
    console.error('Name must be a string');

    return;
  }

  return `User ${name} is ${age} old from ${country}; weight - ${weight}; height - ${height}`;
}

// const userAge = undefined;

console.log(showUserData('Piter', 99));

console.log(showUserData('Harry', 34, 'China'));

console.log(showUserData('John', 88, 'USA'));




///////////////////// ARROW FUNCTION /////////////////


const checkAge = (age = 34, name = 'fgfg') => {
  if (typeof age !== 'number') {
    console.error('Age must be a number');

    return;
  }

  if (typeof name !== 'string') {
    console.error('Name must be a string');

    return;
  }

  return age < 21 ? alert('Not allowed') : alert('Allowed!')
};


checkAge(44);