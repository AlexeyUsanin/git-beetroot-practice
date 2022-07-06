import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const user = {
  name: 'sdfsdf',
  age: 56,
  address: {
    city: 'dfdfd',
  }
}

const { name, age, address: { city } } = user;

const arr = [1, 2, 3, 4, 5];

console.log('name', name);
console.log('age', age);
console.log('city', city);

const [one, two, three, four] = arr;

console.log('one', one);
console.log('two', two)
console.log('three', three)