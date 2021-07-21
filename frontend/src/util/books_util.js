import axios from 'axios';

export const findBooks = book => {
  let newBooks = book.split(' ').join("+")
  return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${newBooks}`)
}