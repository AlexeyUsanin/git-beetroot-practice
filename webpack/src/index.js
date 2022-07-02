import $ from 'jquery';
import { button, buttonSmall } from './button';
// import btn from './button';

const h1 = document.createElement('h1');
h1.innerText = 'Hello Webpack';

const p = $('<p>This is paragraph</p>');

$('body').append(p);

$('body').append(button);

console.log('button', button)

document.body.append(h1);

