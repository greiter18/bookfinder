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

  const wishlistCount = () => {
    return wishlists.length
  }

  return (
    <div className="wishListPage">
      {console.log('wishlistsssss',wishlists)}
      <h1>Your Wishlist ({wishlistCount()})</h1>  
      <ul className="wishlist"> {setWishlist} </ul> 
    </div>
  )
}

export default Wishlist;
