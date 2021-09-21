import axios from 'axios';

export const fetchReadLists = (user_id) => {
  return axios.get(`/api/readlists/user/${user_id}`)
}

export const addReadBook = book => {
  return axios.post(``, book)
} 

export const removeReadBook = readBook_id => {
  return axios.delete('', readBook_id)
}