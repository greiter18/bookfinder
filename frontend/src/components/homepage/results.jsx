import React, {useState, useEffect}from 'react';
import axios from "axios";
import BookIndexItem from "./book_index_item";

const Result = ({history, addReadBook, addBook, currentUser}) => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    debugger
    findBooks().then((response) => {
      setBookList(response.data.items)
    })
  }, [])

  const options = {
    headers: {
      common: null
    }
  };

  let results = history.slice(1)
  const findBooks = () => {
     return axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${results}`,
    // `https://www.googleapis.com/books/v1/volumes?q=${results}&startIndex=${currentPage}&maxResults=${totalBooksShown}`,
    options
		);
  };

  const list = bookList.map((book) => {
    return <li> <BookIndexItem 
    book={book.volumeInfo} key={book.id} bookId={book.id}
    currentUser={currentUser} addBook={addBook} addReadBook={addReadBook}
    /></li>
  })

  // const urlParams = new URLSearchParams(location.search);
  // const params = () => {
  //  const newParams = new URLSearchParams(window.location.search)
  //  for (const param of newParams) {
  //    return param
  //     console.log('param---------',param)
  //     console.log('testing')
  //   }
  // }


  return (
    <div>
      Results Page
      {console.log('results------',results)}
      {console.log('history------',history)}
      {console.log('book------',bookList)}
      <div id='content'>{list}</div>
    </div>
  )
};

export default Result;
