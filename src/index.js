import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
// import { galleryItems } from './components/gallery-items';
// export * from "./components/Paragraph";


const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const elem1 = React.createElement('span', { children: 'Hello' });
// ReactDom.createRoot('span', { children: 'world' });
// const data = {
//     preview:'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//     }
// const data = galleryItems[0];

// const data = {
//   preview:
//     'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//   original:
//     'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//   description: 'Hokkaido Flower',
// };

// const Painting = props => {
//   return (
//   <div id = "main_id" className='test_class'>
//   <a  href={props.original}>
//       <img
//       src={props.preview}
//       data-source={props.original}
//       alt={props.description}
//       />
//     </a>
    
//     <p>
//       {props.description}
//     </p>
// </div>
// );}

// root.render(<Painting data />);

// const elem2 = React.createElement('span', { children: 'world' });

// const elem1 = <span>Hello</span>;
// const elem2 = <span>world</span>;

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: [elem1, ' ', elem2],
// });






// const element = React.createElement('div', { a: 5, b: 10 }, 'Hello', '  ', 'world');
// console.log(element);
// root.render(<JsxElement />);
// const jsxElement = <div>Hello world</div>




