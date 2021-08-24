import axios from 'axios';

export const receiveWishlist =  (user_id) => {
  return(
    axios.get(`/api/wishlists/user/${user_id}`)
  )
}

export const add_Book = (bookId, currentUser) => {
  debugger
  return (
  //axios.post(`/api/users/${currentUser.id}/wishlists/`, bookId)
  axios.post(`/api/wishlists/`, {bookId, currentUser})
  )}

export const remove_book = book => {
  debugger
  return(
  axios.delete(`/api/wishlists/${book.wishlist.id}/${book.id}`, book)
  )}