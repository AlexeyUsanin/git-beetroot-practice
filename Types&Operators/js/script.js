// const sum = 0.1 + 0.2;

// console.log('sum', sum.toFixed(1));


// alert('Hello!');

// const question = confirm('Your question?');
// console.log(question);

const currentYear = 2022;
// const birthYear = prompt('Enter your birthday?');


// Number(birthYear);
// console.log(birthYear)
// const age = currentYear + birthYear;
// console.log(age);


// const usd = 1.1;
// const num = +prompt('Enter number');
// const lastNumber = num % 10;
// const secondNum = Math.floor(num % 100 / 10);
// const firstNum = Math.floor(num / 100);
// const result = lastNumber + '' + secondNum + '' + firstNum;

// console.log('num ---->', result);

/// String
const name = 'Harry';

console.log(`Your name is ${name}`);
console.log(typeof name);

/// Number
const num = 344343;
/// BigInt
console.log(typeof num);

console.log(`${num}`);
const bigNumber = 34343433434343434344n;
/// Boolean
// true false
console.log(typeof bigNumber);

/// Undefined
// undefined

/// Null
let age = null;
console.log(typeof age);

/// Symbol

const id = Symbol('1');
console.log(typeof id);

/// Object

const user = { name: 'fsfgdfgfdg', age: 3434, country: null };
console.log(typeof user);


// const question = confirm('Are your sure?');

// console.log('question', question);

if (100 > 200) {
  alert('True!!!!');
} else if (20 < 50) {
  alert('Not False!!!!');
} else if (10 > 50) {
  alert('Not false yet!!!!');
} else {
  alert('Final!!!!');
}