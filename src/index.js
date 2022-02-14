import React from 'react';
import ReactDom from 'react-dom'

//css

import './index.css';
//function Greeting(){
//  return <h4>this is jonathan and this is my first component</h4>;
//}
const firstBook = {
  img:'https://m.media-amazon.com/images/I/715u7p+38+L._AC_UY436_QL65_.jpg',
  title:'Manifest',
  author:'Roxie Nafousi',
}
const secondBook = {
  img:'https://m.media-amazon.com/images/I/81huXG+mTmL._AC_UY436_QL65_.jpg',
  title:'The Mental Toughness Handbook',
  author:'Damon Zahariades',
}


function Booklist() {
  return (
  <section className='booklist'>
  <Book
    img={firstBook.img}
    title={firstBook.title}
    author= {firstBook.author}
    >
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Sit in magni ad molestias minima fugit voluptates a,
        ipsam rem eaque.</p>
  </Book>
  <Book
    img={secondBook.img}
    title={secondBook.title}
    author={secondBook.author}
    />
  </section>
  );
}

const Book = (props) => {
  const {img, title, author} = props;
  console.log(props);
  return (
  <article className="book">
  <img src={img} alt=''/>
  <h1>{title}</h1>
  <h4>{author}</h4>
  {props.children}
</article>
  );
};



ReactDom.render(<Booklist />, document.getElementById('root'));
