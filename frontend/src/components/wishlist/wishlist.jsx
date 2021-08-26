import React, {useState, useEffect} from "react";
import WishlistIndexItem from './wishlist_index_item';

const Wishlist = ({currentUser, wishlists, fetchWishlist, remove_book}) => {

  useEffect(() => {
    debugger
    fetchWishlist(currentUser.id)
  }, [])

  const wishlistList = wishlists?.map((wishlist) => {
    return <WishlistIndexItem bookId={wishlist.book_id} key={wishlist.id} remove={remove_book}/>
  })

  return (
    <div>
      {console.log('wishlisssttttttss jsx',wishlists)}
      {wishlistList}
      <h1>Wishlist page</h1>  
    </div>
  )
}

export default Wishlist;
