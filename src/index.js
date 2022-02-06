import React from 'react';
import ReactDom from 'react-dom'

//css

import './index.css';
//function Greeting(){
//  return <h4>this is jonathan and this is my first component</h4>;
//}

function Booklist() {
  return (
  <section className='booklist'>
  <Book />
  <Book />
  <Book />
  <Book />
  <Book />
  </section>
  );
}

const Book = () =>{
  return (
  <article>
    <Image></Image>
    <Title/>
    <Author/>
  </article>
  );
};


const Title = () => <h1>Manifest</h1>
const Author = () => <h4>Roxie Nafousi </h4>

const Image = () => <img src='https://m.media-amazon.com
/images/I/715u7p+38+L._AC_UY436_QL65_.jpg'alt=''/>

ReactDom.render(<Booklist />, document.getElementById('root'));
