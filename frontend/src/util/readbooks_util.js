import axios from 'axios';

export const fetchReadBooks = (id) => {
  return axios.get(`/api/readlists/user/${id}`)
}

export const addReadBook = book => {
  return axios.post(``, book)
} 

export const removeReadBook = readBook_id => {
  return axios.delete('', readBook_id)
}