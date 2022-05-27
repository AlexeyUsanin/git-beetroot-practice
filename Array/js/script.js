const arr = [4, 'hello', null, undefined, {}, []];
console.log('arr', arr)

// console.log(typeof arr);


// console.log(arr[arr.length - 1]);
// console.log(arr.length);

const newArr = [...arr];
// const newArr = arr.slice();


// // newArr[1] = 'hi';
// for (let el of arr) {
  //   newArr.push(el);
  // }

newArr.shift(); // Delete first element
newArr.unshift(8); // Add to the start
newArr.push('heee');  // Add to the end
newArr.pop(); // Delete last element


// const matrix = [[4, 1], ['a', 'b'], [{}, [[], []]]];



//// Slice
// console.log('slice --->', arr.slice(1, 5))

/// Splice
// console.log('splice --->', arr.splice(1, 2, 66, 'str', {name: 'dfdf'}))
console.log('arr', arr);


//// Concat
const a = ['a', 'b', 'c'];

console.log('concat', arr.concat(a));
console.log([...arr, ...a]);

//// Reverse
console.log('Reverse --->', arr.reverse());

/// split & join
const str = 'Hello world!';
const separetedStr = str.split(' ');
const names = ['Petro', 'Mykola', 'Olga'];

const strNames = names.join(', ');
console.log('strNames', strNames);


///////////////////////////////////////////////
function addByIndex(arr, index, element) {
  const cloneArray = [...arr];

  cloneArray.splice(index, 0, element);

  return cloneArray;
}

// console.log(addByIndex(names, 2, 'Ivan'));
//////////////////////////////////////////////



for (let name of names) {
  // console.log('name', name);
}

for (let i = 0; i < names.length; i++) {
  // console.log(`Name ${names[i]} with index ${i}`);
}


///// forEach
names.forEach(function(el, index, arr) {
  console.log(`Name ${el} ${index} ${arr}`)
});

///// indexOf & includes
console.log('indexOf ---->', names.indexOf('Olga'));

names.includes('Petro')


////////// Find
const users = [
  {
    name: 'Barak Obama',
    age: 65,
    country: 'SA',
    role: 'admin'
  },
  {
    name: 'Trump',
    age: 61,
    country: 'USA',
    role: 'student'
    },
  {
    name: 'John Kennedy',
    age: 78,
    country: 'NA',
    role: 'student'
  }
]

console.log('users', users);

const name = names.find(function(el) {
  return el === 'Petro';
})

console.log('name --> ', name);

const findByAge = users.find((el, index) => el.age > 60 && el.role === 'student');

console.log('findByAge --->', findByAge)

////// Filter
// const filterByAge = users.filter(function(el) {
//   return el.age > 61;
// });


const filterByAge = (arr, age) => arr.filter((el) => el.age > age);

console.log('filterByAge --->', filterByAge(users, 61));

///// Map
function toLowerCase(arr) {
  return arr.map(function(el) {
    return {
      ...el,
      // age: el.age,
      // country: el.country,
      // role: el.role,
      name: el.name.toLowerCase(),
    };
  })
}


console.log('toLowerCase', toLowerCase(users))