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

// function showUserData(name = 'Default name', age = 34, country = 'Uk', height = 146, weight = 65) {
//   // console.log('arguments length', arguments.length);
//   if (typeof age !== 'number') {

//     if (typeof name !== 'string') {
//       console.error('Name must be a string');

//       return;
//     }

//     return `User ${name} is ${age} old from ${country}; weight - ${weight}; height - ${height}`;
//   }
// }

// const userAge = undefined;

// console.log(showUserData('Pidfgfdgdfter', 99));

// console.log(showUserData('Harry', 34, 'China'));

// console.log(showUserData('John', 88, 'USA'));


///////////////////// ARROW FUNCTION /////////////////


// const checkAge = (age = 34, name = 'fgfg') => {
//   if (typeof age !== 'number') {
//     console.error('Age must be a number');

//     return;
//   }

//   if (typeof name !== 'string') {
//     console.error('Name must be a string');

//     return;
//   }

//   return age < 21 ? alert('Not allowed') : alert('Allowed!')
// };


// checkAge(44);


// rest/spread

// function showArgs() {
//   return arguments;
//   // console.log(nums)

// }

const showArgs = (...nums) => {
  // return arguments;
  console.log(nums.length)
}

console.log(showArgs(3, '3', null, 34, '35'));


function calcFactorial(num) {
  let factorial = 1;
  let i = 0;

  while (i < num) {
    i++;
    factorial = factorial * i;
  }

  return factorial;
}

// console.log('calcFactorial', calcFactorial(10))


const toNumber = (a, b, c) => Number(`${a}${b}${c}`);


// console.log('toNumber-->', toNumber(1, 5, 6))


// const width = +prompt('Width');
// const height = +prompt('Height');

// function calcSquare(w, h) {
//   if (!arguments.length) {
//     return 'No arguments!!!';
//   }

//   if (!h) {
//     return w ** 2;
//   }

//   return w * h;
// }

// console.log(calcSquare());

function checkIsPerfect(num) {
  let result = 0;

  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      result = result + i;
    }
  }

  // if (result === num) {
  //   return true
  // } else {
  //   return false;
  // }

  return result === num ? true : false;
}

// console.log(checkIsPerfect(6))

function checkPerfectNumberRange(from, to) {
  for (let i = from; i <= to; i++) {
    const isPerfect = checkIsPerfect(i);

    if (isPerfect) {
      console.log(i);
    }
  }
}

console.log(checkPerfectNumberRange(5, 1000));

const findMinMax = (...numbers) => {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return `Min number is ${min}, Max number is ${max}.`
}

console.log(findMinMax(3, -1, 0, 5, 3, 6, 2, 67, 90, 34, 34, 77, 222, 90));


const isAllow = (age) => age < 21 ? false : true;

const showErrorMsg = () => {
  alert('Access denied!');
}

const showSuccessMsg = () => {
  alert('Access granted!');
}

const handleAccess = (age, checkAge, showError, showSuccess) => {
  if (checkAge(age)) {
    showSuccess();
  } else {
    showError();
  }
}

// handleAccess(11, isAllow, showErrorMsg, showSuccessMsg);
console.log('a', a);

a.toFixed(1);
a++;
a--;

const a = 4;

function showHello() {
  var a = 5;

  console.log('a', a);

  if (true) {
    var a = 3;

    console.log('a', a);
  }
}

showHello();

