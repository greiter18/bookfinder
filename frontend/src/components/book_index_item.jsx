import React from 'react';

const BookIndexItem = ({ book, addBook, bookId, currentUser }) => {
  const authors = book?.authors?.join(", ");
  const bookInfo = {
    title: book.title, 
    authors: authors,
    image: book.imageLinks?.thumbnail, 
    link: book?.infoLink,
    bookId: bookId
    }

  const addToWishlist = () => {
    // if(currentUser){
    //   return (<button  onClick={() => addBook(bookId, currentUser)}>Add to wishlist</button>)
    // } else {
    //   return '';
    // }
    if(currentUser){
      return (<button  onClick={() => addBook(bookInfo, currentUser)}>Add to wishlist</button>)
    } else {
      return '';
    }
  }

	return (
		<div className="book_item">
			{/* <h1>Book #{book.id}</h1> */}
      {console.log('booookinfooo', bookInfo)}
			<h2>{book.title}</h2>
			<h3>Author(s): {authors}</h3>
			<a href={book.infoLink} target="_blank" rel="noopener noreferrer">
				<img src={book.imageLinks?.thumbnail} alt="book thumbnail" />
			</a>
			<p>{book.description}</p>
			{/* <button  onClick={() => addBook({bookId, currentUser})}>Add to wishlist</button> */}
      {addToWishlist()}
		</div>
	);
};

export default BookIndexItem;



//creae a higher order comp that takes in a comp that puts in header on it

