import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
// import { App } from 'components/App';
import './index.css';
import galleryItems from './gallery-items';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const elem1 = React.createElement('span', { children: 'Hello' });
const elem1 = <span>Hello</span>;
React.createElement('span', { children: 'world' });
// const data = {
//     preview:'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//     }
const data = galleryItems[0];

function Painting (props) {
  <div >
  <a  href="{data.original}">
      <img
      src={data.preview}
      data-source={data.original}
      alt={data.description}
      />
    </a>
    
    <p>
      {data.description}
    </p>
</div>
};

ReactDOM.render(<Painting/>, document.querySelector('#root'));


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


