import React, {useState, useEffect} from "react";

const Wishlist = ({currentUser, books, receiveWishlist, remove_book}) => {

   useEffect(() => {
     receiveWishlist(currentUser.id), []
   })

  return (
    <div>

    </div>
  )
}
