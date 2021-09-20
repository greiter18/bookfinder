import React, {useState, useEffect} from "react";
import WishlistIndexItem from './wishlist_index_item';

//hf5f3r38P1cC - tester
//jWAsAAAAQBAJ

const Wishlist = ({currentUser, wishlists, fetchWishlist, remove_book }) => {
  useEffect(() => {
    debugger
    fetchWishlist(currentUser.id)
  }, [])

  // const fetchBooksfromList = async () => {
  //   const response = await fetch((`https://www.googleapis.com/books/v1/volumes/hf5f3r38P1cC`));//, options))
  //   const bookList = await response.json(); 
  //   console.log('bookilist',bookList);
  //   return bookList
  // }

  // getBooks().then(data => console.log('.thennnnn',data))

  // const setbook = wishlists?.forEach(wishlist => {
  // // //put into
  // setBooks([...books, wishlist.book_id]);
  // })
  // 1 does the api take multiple requests?
  //async await set up 
  //Promise.all - takes multiple promise - only returns when all resolve


    const setWishlist = wishlists.map(book => {
      return <WishlistIndexItem book={book} removeBook={remove_book}/>
    })

  return (
    <div>
      <h1>Wishlist page</h1>  
      {setWishlist}
    </div>
  )
}

export default Wishlist;
