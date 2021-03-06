import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {// setting a default header with the token as the value
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = (userData) => {
  debugger
  return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
  return axios.post('/api/users/login', userData);
};