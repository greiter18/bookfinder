import React, {useState, useEffect} from "react";
import axios from "axios";

const WishlistIndexItem = ({title}) => {

// const wishlistBook = bookId => {
//   return axios.get(
//     `https://www.googleapis.com/books/v1/volumes/${bookId}`
//   ).then((response) => {
//         let title =  response.volumeInfo.title;
//         let author = response.volumeInfo.authors
//   }) 
// }
  return(
    <div>
      {title}
      index item
    </div>
  )
}

export default WishlistIndexItem;