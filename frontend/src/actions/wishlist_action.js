import * as APIUtil from '../util/wishlist_util';

export const RECEIVE_WISHLIST_ALL = "RECEIVE_WISHLIST_ALL";
export const REMOVE_BOOK = "REMOVE_BOOK";
export const RECEIVE_BOOK_FROM_LIST = "RECEIVE_BOOK_FROM_LIST";

export const receiveWishlist = wishlists => {
  debugger
  return ({   
    type: RECEIVE_WISHLIST_ALL,
    wishlists
  })
}

export const removeBook = wishlistId => {
  return ({
    type: REMOVE_BOOK,
    wishlistId
  })
}

export const receiveBookFromList = book => {
  return ({
    type: RECEIVE_BOOK_FROM_LIST,
    book
  })
}

export const add_Book = (bookId, currentUser) => dispatch => {
  debugger
  return (
  APIUtil.add_Book(bookId, currentUser).then(
    wishlists => dispatch(receiveWishlist(wishlists))
  )
  )}

export const remove_book = wishlistId => dispatch => (
  APIUtil.remove_book(wishlistId).then(
    book => dispatch(removeBook(book.id))
  )
)

export const fetchWishlist = (id) => dispatch => {
  debugger 
  return (
    APIUtil.fetchWishlist(id).then(
      wishlists => dispatch(receiveWishlist(wishlists)))
  )
}

export const fetchBooks = id => dispatch => {
  return (
  APIUtil.fetchbookCall(id).then(
    bookData => dispatch(receiveBookFromList(bookData)))
  )
}