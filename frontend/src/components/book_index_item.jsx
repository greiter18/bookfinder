import React from 'react';

const BookIndexItem = ({ book, addBook, bookId, currentUser, addReadBook }) => {
  const authors = book?.authors?.join(", ");
  const bookInfo = {
    title: book.title, 
    authors: authors,
    image: book.imageLinks?.thumbnail, 
    link: book?.infoLink,
    bookId: bookId
    }

  const addToWishlist = () => {
    if(currentUser?.id){
      return (<button  onClick={() => addBook(bookInfo, currentUser)}>Add to wishlist</button>)
    } else {
      return '';
    }
  }

  const addToReadBooks = () => {
    if(currentUser?.id){
      return (<button onClick={() => addReadBook(bookInfo)}>Read</button>)
    } else {
      return ''
    }
  }

	return (
		<div className="book_item">
      <a href={book.infoLink} target="_blank" rel="noopener noreferrer">
				<img src={book.imageLinks?.thumbnail} alt="book thumbnail" />
			</a>
      <div className="bookiteminfo">
        <h2 className="mainbooktitle">{book.title}</h2>
        <h3>By {authors}</h3>
        <p>{book.description}</p>
        {/* <button  onClick={() => addBook({bookId, currentUser})}>Add to wishlist</button> */}
        {addToWishlist()}
        {addToReadBooks()}
      </div>
		</div>
	);
};

export default BookIndexItem;



//creae a higher order comp that takes in a comp that puts in header on it

