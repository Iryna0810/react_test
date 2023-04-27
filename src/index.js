import React from 'react';
// import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
// import { App } from 'components/App';
import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const elem1 = React.createElement('span', { children: 'Hello' });
const elem1 = <span>Hello</span>;
React.createElement('span', { children: 'world' });

const painting = (
  <div>
    <img src="" alt="" width="480"></img>
    <h2></h2>
    <p>Author: <a href="" ></a></p>
    <p>Price: $</p>
    <p>Store: </p>
    <button type=""></button>
  </div>

);



// const elem2 = React.createElement('span', { children: 'world' });
const elem2 = <span>world</span>;

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: [elem1, ' ', elem2],
// });

const jsxElement = (
  <div >
  { elem1 }
  {elem2}  
  </div >
);

console.log(jsxElement);

// const element = React.createElement('div', { a: 5, b: 10 }, 'Hello', ' ', 'world');
// console.log(element);

// const jsxElement = <div>Hello world</div>
// console.log(jsxElement);


// ReactDOM.render(element, document.querySelector('#root'));


