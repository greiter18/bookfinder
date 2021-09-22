import * as APIUtil from '../util/readbooks_util'

export const RECEIVE_READBOOKS_ALL = "RECEIVE_READBOOKS_ALL";
export const RECEIVE_READBOOK = "RECEIVE_READBOOK";
export const REMOVE_READBOOK = "REMOVE_READBOOK";

export const receiveReadBooks = readBooks => {
  // debugger
  return ({
    type: RECEIVE_READBOOKS_ALL,
    readBooks
  })
}

export const receiveReadBook = readBook => {
  // debugger
  return ({
    type: RECEIVE_READBOOK,
    readBook
  })
}

export const removeReadBook = readBookId => {
  debugger
  return ({
    type: REMOVE_READBOOK,
    readBookId
  })
}

export const addReadBook = (book) => dispatch => {
  // debugger
  return (
  APIUtil.addReadBook(book).then(
    readList => dispatch(receiveReadBook(readList))
    )
  )
}

export const fetchReadBooks = id => dispatch => {
  // debugger
  return (
    APIUtil.fetchReadBooks(id).then(
      readBooks => dispatch(receiveReadBooks(readBooks))
    )
  )
}

export const deleteReadBook = readBook_id => dispatch => {
  debugger
  return (
    APIUtil.removeReadBook(readBook_id).then(
      readBook_id => dispatch(removeReadBook(readBook_id)))
  )
}
