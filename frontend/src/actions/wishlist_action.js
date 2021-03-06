import * as APIUtil from '../util/wishlist_util';

export const RECEIVE_WISHLIST_ALL = "RECEIVE_WISHLIST_ALL";
export const RECEIVE_WISHLIST = "RECEIVE_WISHLIST";
export const REMOVE_BOOK = "REMOVE_BOOK";
// export const RECEIVE_BOOK_FROM_LIST = "RECEIVE_BOOK_FROM_LIST";

export const receiveWishlists = wishlists => {
  // debugger
  return ({   
    type: RECEIVE_WISHLIST_ALL,
    wishlists
  })
}

export const receiveWishlist = wishlist => {
  // debugger
  return ({ 
    type: RECEIVE_WISHLIST,
    wishlist
  })
}

export const removeBook = wishlistId => {
  debugger
  return ({
    type: REMOVE_BOOK,
    wishlistId: wishlistId.data
  })
}

export const add_Book = (book, currentUser) => dispatch => {
  // debugger
  return (
  APIUtil.add_Book(book, currentUser).then(
    wishlist => dispatch(receiveWishlist(wishlist))
  )
  )}

export const remove_book = wishlistId => dispatch => {
  debugger
  return(
    APIUtil.remove_book(wishlistId).then(
    book => dispatch(removeBook(book)))
    )
  }

export const fetchWishlist = (id) => dispatch => {
  // debugger 
  return (
    APIUtil.fetchWishlist(id).then(
      wishlists => dispatch(receiveWishlists(wishlists)))
  )
}