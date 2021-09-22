import axios from 'axios';

export const fetchWishlist =  (user_id) => {
  // debugger
  return(
    axios.get(`/api/wishlists/user/${user_id}`)
  )
}

export const add_Book = (book, currentUser) => {
  // debugger
  return (
  axios.post(`/api/wishlists/`, book)
  )}

export const remove_book = id => {
  debugger
  return(
  axios.delete(`/api/wishlists/${id}`)
  )}

  export const  fetchbookCall = bookId => {
    return(
      axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
    )
    //
  } 