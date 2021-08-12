import * as APIUtil from '../util/wishlist_util';

export const RECEIVE_WISHLIST_ALL = "RECEIVE_WISHLIST_ALL";
export const REMOVE_BOOK = "REMOVE_BOOK";

export const receiveWishlist = book => {
  return ({   
    type: RECEIVE_WISHLIST_ALL,
    book
  })
}

export const removeBook = bookId => {
  return ({
    type: REMOVE_BOOK,
    bookId
  })
}

export const add_Book = book => dispatch => (
  APIUtil.add_Book(book).then(
    book => dispatch(receiveWishlist(book))
  )
)

export const remove_book = book => dispatch => (
  APIUtil.remove_book(book).then(
    book => dispatch(removeBook(book.id))
  )
)