import axios from 'axios';

export const add_Book = book => (
  axios.post('/api/wishlist/', book)
)

export const remove_book = book => (
  axios.delete(`/api/${book.wishlist.id}/${book.id}`, book)
)