import React from "react";

const WishlistIndexItem = ({book, removeBook, addReadBook}) => {

  return(
    <div className="wishListItem">
      <div className="wishListItemMain">
        <a href={book.link} target="_blank" className='mainbookimageA' rel="noreferrer">
        <img src={book?.image} alt={book?.title} className="mainbookimage" />
        </a>
        <div className="wishListItemright">
          <div className="wishListItemDetails">
            <p><span className="wishbookinfo">{book.title}</span> by <span className="wishbookinfo">{book.author}</span></p>
          </div>
          <div>
            <i class="fa fa-trash-o" aria-hidden="true" onClick={() => removeBook(book._id)}></i>
            <button onClick={() => addReadBook(book).then(() => removeBook(book._id))}>Read</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WishlistIndexItem;