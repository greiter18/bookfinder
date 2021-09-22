import React, {useState, useEffect} from "react";
import axios from "axios";

const WishlistIndexItem = ({book, removeBook, addReadBook}) => {


  return(
    <div className="wishListItem">
      <div className="wishListItemDetails">
        Title: {book.title}
        Author: {book.author}
      </div>
      <a href={book.link} target="_blank">
       <img src={book?.image} alt={book?.title} />
      </a>
      <div>
        <i class="fa fa-trash-o" aria-hidden="true" onClick={() => removeBook(book._id)}></i>
        <button onClick={() => addReadBook(book)}>Read</button>
      </div>
    </div>
  )
}

export default WishlistIndexItem;