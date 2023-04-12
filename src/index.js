import _ from 'lodash';
// import printMe from './print.js';
import {} from './game';

console.log("index.js+-");

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');


  // const btn = document.createElement('button');
  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;

  // element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
