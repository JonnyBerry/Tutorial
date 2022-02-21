import React from 'react';
import ReactDom from 'react-dom'

//css

import './index.css';

import {books} from './books'
import Book from './Book'
//function Greeting(){
//  return <h4>this is jonathan and this is my first component</h4>;
//}
function Booklist() {
  return(
     <section className='booklist'>
    {books.map((book, index) => {
   return <Book key={book.id} {...book}></Book>;
  })}
  </section>
  );
}

//book component



ReactDom.render(<Booklist />, document.getElementById('root'));
