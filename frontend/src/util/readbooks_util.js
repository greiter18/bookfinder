import axios from 'axios';

export const fetchReadBooks = (id) => {
  // debugger
  return axios.get(`/api/readbooks/user/${id}`)
}

export const addReadBook = book => {
  // debugger
  return (
    axios.post(`/api/readbooks/`, book))
} 

export const removeReadBook = readBook_id => {
  debugger
  return (
    axios.delete(`/api/readbooks/${readBook_id}`)
  )
}