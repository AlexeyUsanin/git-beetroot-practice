/*

|| or
&& and
! not

*/

// const str = undefined;
// const emptyStr = '';

// console.log(false || emptyStr || !true);

// console.log('Hello' || 0 && 1 && '');

// if (str !== null) {
//   console.log('str.length', str.length)
// }

// console.log(str !== undefined)

// const role = prompt('Enter your role (Developer, Admin, Viewer, Owner)');

// if (role === 'developer' && role !== 'viewer') {
//   alert('You can write, clone, push, create PR!');
// } else if (role === 'admin' || role === 'owner') {
//   alert('You can write, clone, push, create PR and delete repository');
// } else {
//   alert('You can only view repo!')
// }


// const num = prompt('enter num')

// if (num === '1') {
//   alert('!')
// } else if (num === '2') {
//   alert('@')
// } else if (num === '3') {
//   alert('#')
// } else if (num === '4') {
//   alert('$')
// } else if (num === '5') {
//   alert('%')
// } else if (num === '6') {
//   alert('^')
// } else if (num === '7') {
//   alert('&')
// } else if (num === '8') {
//   alert('*')
// } else {
//   alert('Plz enter correct a number!')
// }

// const month = prompt("Enter month");

// switch (month) {
//   case '1':
//     alert("It's Jan");
//     break;
//   case '2':
//     alert("It's Feb");
//     break;
//   case '3':
//     alert("It's Mar");
//     break;
//   case '4':
//     alert("It's Apr");
//     break;
//   case '5':
//     alert("It's May");
//     break;
//   case '6':
//     alert("It's Jun");
//     break;
//   case '7':
//     alert("It's Jul");
//     break;
//   case '8':
//     alert("It's Aug");
//     break;
//   case '9':
//     alert("It's Sep");
//     break;
//   case '10':
//     alert("It's Oct");
//     break;
//   case '11':
//     alert("It's Nov");
//     break;
//   case '12':
//     alert("It's Dec!  New Year!!!!!!");
//     break;
//   default:
//     alert('Enter from 1 to 12 month!');
// }

// const firstOperand = +prompt('Enter first operand');
// const operator = prompt('Enter an operator');
// const secondOperand = +prompt('Enter second operand');
// let result = null;

// switch (operator) {
//   case '+':
//     result = firstOperand + secondOperand;
//     break;
//   case '-':
//     result = firstOperand - secondOperand;
//     break;
//   case '*':
//     result = firstOperand * secondOperand;
//     break;
//   case '/':
//     result = firstOperand / secondOperand;
//     break;
//   default:
//     alert('Enter a valid operator');
// }

// alert(`Result is ${result}`);


// const age = +prompt('Enter your age');

// // condition ? 'true' : 'false';

// const message = age < 18 ? (age > 6 ? 'Go to school' : 'Go to kidgarden') : ('Access granted');

// alert(message);

/////////////////////// WHILE /////////////////////////
// let i = 1;
// const result = i++;

// console.log(result);

// const num = +prompt('Enter num!');
// let i = num;

// while (i > 0) {
//   console.log(i);
//   i--;
// }

// let msg = '';

// while (i < num) {
//   i++;

//   msg = msg + ' #';
//   console.log(msg);

//   if (i === 500) {
//     break;
//   }
// }


// let factorial = 1;

// while (i < num) {
//   i++;
//   factorial = factorial * i;
// }

// console.log(factorial);


////////////// DO WHILE //////////////////////////
// let i = 0;

// do {
//   i++;
//   console.log(i);
// } while (i < 10)

// let num = 1000;
// let i = 0;

// do {
//   num = num / 2;

//   console.log(num);

//   i++;
// } while (num / 2 > 50 )

// console.log(i);


// const question = +prompt('2 + 2 * 2');

let question = null;

do {
  question = +prompt('2 + 2 * 2');
  // if (question !== 6) {
  //   alert('Incorrect!')
  // }

} while (question !== 6)

console.log('Ok!')