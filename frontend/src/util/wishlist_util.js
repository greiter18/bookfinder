import axios from 'axios';

export const add_Book = book => (
  axios.post('/api/wishlist/', book)
)