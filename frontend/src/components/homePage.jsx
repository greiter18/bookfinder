import React, {useState} from 'react';
import axios from "axios";
import BookIndexItem from "./book_index_item";
import Pagination from "./pagination";
import NavBar from './navBar';

const HomePage = () => {
	const [book, setBook] = useState("");
	const [bookList, setBookList] = useState([]);
	const [totalBooks, setTotalBooks] = useState(0);
	const [totalBooksShown, setTotalBooksShown] = useState(10);
	const [currentPage, setCurrentPage] = useState(0);

	const handleChange = (event) => { //event - when a user does something
		setBook(event.target.value);
	};

	const findBooks = (book) => {
		let newBooks = book.split(" ").join("+");
		return axios.get(
			`https://www.googleapis.com/books/v1/volumes?q=${newBooks}&startIndex=${currentPage}&maxResults=${totalBooksShown}`
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		findBooks(book).then((response) => {
			console.log(response);
			setBookList(response.data.items);
			setTotalBooks(response.data.totalItems);
		});
	};

	const list = bookList.map((book) => {
		return <BookIndexItem book={book.volumeInfo} key={book.id} />;
	});

	return (
		<div>
      <NavBar/>
			<h1>Bookfinder</h1>
			<form onSubmit={handleSubmit}>
				What book do you want
				<input type="text" onChange={handleChange} />
				<button>Find Book</button>
			</form>
			<div id="content">{list}</div>
			<Pagination data={totalBooks} dataLimit={totalBooksShown} />
		</div>
	);
};

export default HomePage;