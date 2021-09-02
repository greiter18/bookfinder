import React, {useState, useEffect} from "react";
import WishlistIndexItem from './wishlist_index_item';
import axios from "axios";
//hf5f3r38P1cC - tester
//jWAsAAAAQBAJ

const Wishlist = ({currentUser, wishlists, fetchWishlist, remove_book }) => {
  const [books, setBooks] = useState([]);
  //const [books, setBooks] = useState([]);

  useEffect(() => {
    debugger
    fetchWishlist(currentUser.id)
  }, [])

   useEffect(() => {
    debugger
    console.log('useeffect wishlist',wishlists)
    let ids = wishlists.map(wishlist => {
      //async await
      return wishlist.book_id
    })
    setBooks(ids)}, [wishlists])

  // const options = {
  //   headers: {
  //   common: null
  //   }
  // };

  // const getBooks = async () => {
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

    // return (axios.get(`https://www.googleapis.com/books/v1/volumes/hf5f3r38P1cC`, options)
    //   .then((res) => {
    //     let title =  res.data.volumeInfo.title
    //     //console.log('title',title)
    //     if(title){
    //       return <h1>{title}</h1>
    //     } else {
    //       return ''
    //     }
    //   // <WishlistIndexItem title={title} bookId={wishlist.book_id} key={wishlist.id} remove={remove_book}/>
    //   }))

  return (
    <div>
      <h1>Wishlist page</h1>  
      {console.log('books',books)}
      {/* {getBooks().then(data => 
        console.log('.thennnnn',data.volumeInfo.title)
        )} */}
      <WishlistIndexItem/>
    </div>
  )
}

export default Wishlist;
