import * as APIUtil from '../util/session_api_util';

export const RECEIVE_WISHLIST_ALL = "RECEIVE_WISHLIST_ALL";

export const receiveWishlist = book => {
  return ({   
    type: RECEIVE_WISHLIST_ALL,
    book
  })
}

export const add_Book = book => dispatch => (
  APIUtil.add_Book(book).then(
    book => dispatch(receiveWishlist(book))
  )
)