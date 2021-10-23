import React from 'react';
import BookModal from './book_modal'

const BookIndexItem = ({ book, addBook, bookId, currentUser, addReadBook }) => {
  const authors = book?.authors?.join(", ");
  const bookInfo = {
    title: book.title, 
    authors: authors,
    image: book.imageLinks?.thumbnail, 
    link: book?.infoLink,
    bookId: bookId, currentUser,
    description: book.description
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

  const toggleModal = (bookId) => {
    debugger
    document.getElementById(`modal-background-${bookId}`).classList.toggle('open-modal');  
    document.getElementById(`modal-${bookId}`).classList.toggle('open-modal');
  }

	return (
		<div className="book_item">
      <a href={book.infoLink} className='mainbookimageA' target="_blank" rel="noopener noreferrer">
				<img className="mainbookimage" src={book.imageLinks?.thumbnail} alt={book.title} />
			</a>
      <div className="bookiteminfo">
        <h2 className="mainbooktitle">{book.title}</h2>
        <h3>By {authors}</h3>
        <p onClick={() => toggleModal(bookId)} className="more">More...</p>
        <div className="modal-background"  onClick={() => toggleModal(bookId)} id={`modal-background-${bookId}`}>
          <div className="modal" onClick={(e) => e.stopPropagation()} id={`modal-${bookId}`}> 
            <BookModal title={book.title} authors={authors} description={book.description} />
          </div>
        </div>
        {/* <p>{book.description}</p> */}
        {/* <button  onClick={() => addBook({bookId, currentUser})}>Add to wishlist</button> */}
        {addToWishlist()}
        {addToReadBooks()}
      </div>
		</div>
	);
};

export default BookIndexItem;



//creae a higher order comp that takes in a comp that puts in header on it

