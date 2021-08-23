import axios from 'axios';

export const add_Book = (bookId, currentUser) => {
  console.log('bookId',bookId)
  console.log('user',currentUser)
  debugger
  
  return (
  //axios.post(`/api/users/${currentUser.id}/wishlists/`, bookId)
  //
  axios.post(`/api/wishlists/user/${currentUser.id}`, bookId)
  )}

export const remove_book = book => {
  debugger
  return(
  axios.delete(`/api/${book.wishlist.id}/${book.id}`, book)
  )}