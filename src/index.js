import React from 'react';
import ReactDom from 'react-dom'

//css

import './index.css';
//function Greeting(){
//  return <h4>this is jonathan and this is my first component</h4>;
//}
const book= [
 {id:1,
  img:
  'https://m.media-amazon.com/images/I/715u7p+38+L._AC_UY436_QL65_.jpg',
  title:'Manifest',
  author:'Roxie Nafousi',
},

  {id:2,
    img:
    'https://m.media-amazon.com/images/I/81huXG+mTmL._AC_UY436_QL65_.jpg',
    title:'The Mental Toughness Handbook',
    author:'Damon Zahariades',
  },
  {id:3,
    img:
    'https://m.media-amazon.com/images/I/81DPTref3fL._AC_UY436_QL65_.jpg',
    title:'Harry Potter and the Philosophers Stone',
    author:'J.K. Rowling ',
  },
];

function Booklist() {
  return(
     <section className='booklist'>
    {book.map((book, index) => {
   return <Book key={book.id} {...book}></Book>;
  })}
  </section>
  );
}

//book component
const Book = ({img, title,author}) => {
  //const {img, title, author} = props;
  //console.log(props);
  //need to set up an event in react- attribute and eventHandler
  //onClick, onMouseOver
  const clickHandler = () =>{
    alert('hello world')
  }
  return (
  <article className="book">
  <img src={img} alt=''/>
  <h1>{title}</h1>
  <h4>{author}</h4>
  <button type="button" onClick={clickHandler}>
    reference example
  </button>
</article>
  );
};



ReactDom.render(<Booklist />, document.getElementById('root'));
