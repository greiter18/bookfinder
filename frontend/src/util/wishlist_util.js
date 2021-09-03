import axios from 'axios';

export const fetchWishlist =  (user_id) => {
  debugger
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

  export const  fetchbookCall = bookId => {
    return(
      axios.get(`https://www.googleapis.com/books/v1/volumes/hf5f3r38P1cC`)
    )
  } 