import axios from 'axios';

export const add_Book = (bookId, currentUser) => (
  axios.post(`/api/${currentUser.id}/wishlist/`, bookId)
)

export const remove_book = book => (
  axios.delete(`/api/${book.wishlist.id}/${book.id}`, book)
)