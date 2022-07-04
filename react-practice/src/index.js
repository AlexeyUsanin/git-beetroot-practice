// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import header from './header';

// const footer = React.createElement('footer');
// const main = React.createElement('main', null, header, footer);

const main = (
  <main>
    {header}
    <footer>
      <h2>Footer</h2>
    </footer>
  </main>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(main);

console.log('main', main);
