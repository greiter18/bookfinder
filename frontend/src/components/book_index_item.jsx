import React from "react";

const BookIndexItem = ({ book, addBook, bookId }) => {
	const authors = book.authors.join(", ");

	return (
		<div className="book_item">
			{/* <h1>Book #{book.id}</h1> */}
			<h2>{book.title}</h2>
			<h3>Author(s): {authors}</h3>
			<a href={book.infoLink} target="_blank" rel="noopener noreferrer">
				<img src={book.imageLinks?.thumbnail} alt="book thumbnail" />
			</a>
			<p>{book.description}</p>
			<button  onClick={() => addBook(bookId)}>Add to wishlist</button>
		</div>
	);
};

export default BookIndexItem;



//creae a higher order comp that takes in a comp that puts in header on it

