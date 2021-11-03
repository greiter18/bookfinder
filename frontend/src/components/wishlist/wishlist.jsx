import React, {useEffect} from "react";
import WishlistIndexItem from './wishlist_index_item';

//hf5f3r38P1cC - tester
//jWAsAAAAQBAJ

const Wishlist = ({addReadBook,currentUser, wishlists, fetchWishlist, remove_book }) => {
  useEffect(() => {
    fetchWishlist(currentUser.id)
  }, [])

  const setWishlist = wishlists.map(book => {
    return <li>  <WishlistIndexItem book={book} removeBook={remove_book} addReadBook={addReadBook}/> </li>
  })

  return (
    <div>
      <h1>Wishlist page</h1>  
      <ul> {setWishlist} </ul>
      
    </div>
  )
}

export default Wishlist;
