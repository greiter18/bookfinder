import React, {useState} from 'react';
// import axios from "axios";
// import BookIndexItem from "./book_index_item";
import Pagination from "../pagination";
import NavBar from '../NavBar/navBar_container';

const HomePage = ({currentUser, addBook, addReadBook , history}) => {
	const [book, setBook] = useState("");
	const [bookList, setBookList] = useState([]);
	const [totalBooks, setTotalBooks] = useState(0);
	const [totalBooksShown, setTotalBooksShown] = useState(10);
	const [currentPage, setCurrentPage] = useState(0);
  let newBooks = book.split(" ").join("+");

	const handleChange = (event) => { //event - when a user does something
		setBook(event.target.value);
	};

 

	// const findBooks = (book) => {
	// 	let newBooks = book.split(" ").join("+");
	// 	return axios.get(
	// 		`https://www.googleapis.com/books/v1/volumes?q=${newBooks}&startIndex=${currentPage}&maxResults=${totalBooksShown}`,
  //     options
	// 	);
	// };

	// const list = bookList.map((book) => {
	// 	return <li> <BookIndexItem book={book.volumeInfo} key={book.id} bookId={book.id} currentUser={currentUser} addBook={addBook} addReadBook={addReadBook}/> </li>
	// });

  const handleClick = () => {
    history.push({
      pathname: '/result',
      search: newBooks
    })
  }

	return (
		<div className="mainPageSearch">
      <div >
        <form className="bookForm">
          <p className="mainTitle">What book do you want find?</p> 
          <label className="searchBox">
            <input  type="text" onChange={handleChange} placeholder="Book Title" />
          </label>
          <button className="searchButton" onClick={() => handleClick()}>Find Book</button>
        </form>
      </div>
      {/* <ul>
			   <div id="content">{list}</div>
			{/* //  <Pagination data={totalBooks} dataLimit={totalBooksShown} />  
      </ul>  */}
		</div>
	);
};

export default HomePage;