import React from 'react';
import BookModal from './book_modal'

const BookIndexItem = ({ 
  book, addBook, bookId, currentUser, addReadBook , 
  readbooks, wishlist, deleteReadBook , remove_wish,
  readbooksSlice, wishListSlice
  }) => {
  const authors = book?.authors?.join(", ");
  const bookInfo = {
    title: book.title, 
    authors: authors,
    image: book.imageLinks?.thumbnail, 
    link: book?.infoLink,
    bookId: bookId, currentUser,
    description: book.description
    }

  const wishSwitch = () => {
    if (currentUser?.id){
      if (wishlist.includes(bookId)){
        return (<button className="addButtons" onClick={() => remove_wish(book._id)} disabled={true}> <i class="fas fa-check"></i>Add to Wishlist</button> )
      // } else if (readbooks.includes(bookId)){
      //   let read = readbooksSlice.filter(readbook => readbook.book_id === bookId )
      //   console.log('read-------',read)
      //   debugger
      //   return (<button className="addButtons" onClick={() => deleteReadBook(read[0]._id).then(addBook(bookInfo, currentUser))}> Switch to Wishlist</button> )
      }else {
        return (<button className="addButtons" onClick={() => addBook(bookInfo, currentUser)}>Add to Wishlist</button>)
      }
    } else {
      return ''
    }
  }
  const readSwitch = () => {
    if (currentUser?.id){
      if (readbooks.includes(bookId)){
        return (<button className="addButtons" onClick={() => deleteReadBook(book._id)} disabled={true}> <i class="fas fa-check"></i> Add to Readbooks</button> )
      // } else if (wishlist.includes(bookId)){
      //   // let wishbook = wishListSlice.filter(wish => wish.book_id === bookId )
      //   // console.log('wishhh-------',wishbook)
      //   debugger
      //   return (<button className="addButtons" onClick={() => remove_wish(wishbook[0]._id).then(addReadBook(bookInfo, currentUser))}> Switch to Readbooks</button> )
      } else {
        return (<button className="addButtons" onClick={() => addReadBook(bookInfo, currentUser)}>Add to Readbooks</button>)
      }
    } else {
      return ''
    }
  }

  // const addToWishlist = () => {
  //   if(currentUser?.id){
  //     return (<button className="addButtons" onClick={() => addBook(bookInfo, currentUser)} disabled={wishlist.includes(bookId)}>Add to wishlist</button>)
  //   } else {
  //     return '';
  //   }
  // }

  // const addToReadBooks = () => {
  //   if(currentUser?.id){
  //     return (<button className="addButtons" onClick={() => addReadBook(bookInfo)}  disabled={readbooks.includes(bookId)}>Read</button>)
  //   } else {
  //     return ''
  //   }
  // }



  const toggleModal = (bookId) => {
    debugger
    document.getElementById(`modal-background-${bookId}`).classList.toggle('open-modal');  
    document.getElementById(`modal-${bookId}`).classList.toggle('open-modal');
  }
  const shortDescription = description => {
    let descriptArr = description?.split(' ')
    let brief = descriptArr?.slice(0,15)?.join(' ');
    return (<p className='bookdescription '>{brief}<span onClick={() => toggleModal(bookId)} className="more"> More...</span></p>)
  }

	return (
		<div className="book_item">
      <a href={book.infoLink} className='mainbookimageA' target="_blank" rel="noopener noreferrer">
				<img className="mainbookimage" src={book.imageLinks?.thumbnail} alt={book.title} />
			</a>
      <div className="bookiteminfo">
        <h2 className="mainbooktitle">{book.title} By {authors}</h2>
        <br />
        {/* <p onClick={() => toggleModal(bookId)} className="more">More...</p> */}
        {shortDescription(book.description)}
        <div className="modal-background"  onClick={() => toggleModal(bookId)} id={`modal-background-${bookId}`}>
          <div className="modal" onClick={(e) => e.stopPropagation()} id={`modal-${bookId}`}> 
            <BookModal title={book.title} authors={authors} 
            description={book.description} wishAdd={addBook} 
            readAdd={addReadBook} currentUser={currentUser}
            bookInfo={bookInfo} readSwitch={readSwitch()} wishSwitch={wishSwitch()}
            />
          </div>
        </div>
        {/* <p>{book.description}</p> */}
        {/* <button  onClick={() => addBook({bookId, currentUser})}>Add to wishlist</button> */}
          {/* {wishSwitch()}
          {readSwitch()} */}
      </div>
		</div>
	);
};

export default BookIndexItem;



//creae a higher order comp that takes in a comp that puts in header on it

