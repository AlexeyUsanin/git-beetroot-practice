console.log('Start coding!!!');

const hasAccess = (age) => age > 21 ? true : false;


// const greeting = function() {
//   if (hasAccess(20)) {
//     console.log('Access allow! Hello!')
//   } else {
//     console.log('Access denied! Bye!')
//   }
// }

// greeting()

const greeting = new Promise(function(resolve, reject) {
  if (hasAccess(17)) {
    resolve('Access allow! Hello!');
  } else {
    reject('Access denied! Bye!')
  }
});

greeting
  .then(function (data) {
    console.log('data', data)
  })
  .catch(function(error) {
    console.log('error', error)
  })
  .finally(function () {
    console.log('Finally!')
  })

console.log('promise greeting', greeting);
console.log('End coding!!!');
