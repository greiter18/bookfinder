import React, {useState, useEffect} from "react";
import axios from "axios";

const WishlistIndexItem = ({book, removeBook}) => {

  return(
    <div className="wishListItem">
      {console.log('wishlistindex item',book._id)}
      Title: {book.title}
      Author: {book.author}
      <a href={book.link} target="_blank">
        <img src={book?.image} alt="" />
      </a>
      <button onClick={() => removeBook(book._id)}>Remove From Wishlist</button>
    </div>
  )
}

export default WishlistIndexItem;