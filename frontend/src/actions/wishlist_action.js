import * as APIUtil from '../util/wishlist_util';

export const RECEIVE_WISHLIST_ALL = "RECEIVE_WISHLIST_ALL";
export const REMOVE_BOOK = "REMOVE_BOOK";

export const receiveWishlist = books => {
  return ({   
    type: RECEIVE_WISHLIST_ALL,
    books
  })
}

export const removeBook = bookId => {
  return ({
    type: REMOVE_BOOK,
    bookId
  })
}

export const add_Book = (bookId, currentUser) => dispatch => {
  debugger
  return (
  APIUtil.add_Book(bookId, currentUser).then(
    books => dispatch(receiveWishlist(books))
  )
  )}

export const remove_book = book => dispatch => (
  APIUtil.remove_book(book).then(
    book => dispatch(removeBook(book.id))
  )
)