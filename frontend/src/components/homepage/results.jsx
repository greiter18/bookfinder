import React, {useState, useEffect}from 'react';
import axios from "axios";
import BookIndexItem from "./book_index_item";
import Homepage from "./homePage_container";

const Result = ({history, addReadBook, addBook, currentUser, mainhistory, ownProps}) => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    findBooks().then((response) => {
      setBookList(response.data.items)
    }).catch(err => console.log('error',err));
  }, [])

  useEffect(() => {
    findBooks().then((response) => {
      setBookList(response.data.items)
    }).catch(err => console.log('error',err));
  }, [history] )

  const options = {
    headers: {
      common: null
    }
  };

  let results = history?.slice(1);
  const findBooks = () => {
     return axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${results}`,
    // `https://www.googleapis.com/books/v1/volumes?q=${results}&startIndex=${currentPage}&maxResults=${totalBooksShown}`,
    options
		);
  };

  const list = bookList.map((book) => {
    return <li className='booklisteach'> <BookIndexItem 
    book={book.volumeInfo} key={book.id} bookId={book.id}
    currentUser={currentUser} addBook={addBook} addReadBook={addReadBook}/></li>
  })

  return (
    <div>
      <Homepage/>
      <ul className="booklist"><div id='content'>{list}</div></ul>
    </div>
  )
};

export default Result;
