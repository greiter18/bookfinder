import * as APIUtil from '../util/readbooks_util'

export const RECEIVE_READLIST_ALL = "RECEIVE_READLIST_ALL";
export const RECEIVE_READBOOK = "RECEIVE_READBOOK";
export const REMOVE_READBOOK = "REMOVE_READBOOK";

export const receiveReadBooks = readBooks => {
  return ({
    type: RECEIVE_READBOOKS_ALL,
    readBooks
  })
}
export const receiveReadBook = readBook => {
  return ({
    type: RECEIVE_READBOOK,
    readBook
  })
}
export const removeReadBook = readBookId => {
  return ({
    type: REMOVE_READBOOK,
    readBookId
  })
}

export const addReadBook = book => dispatch => {
  return (
  APIUtil.addReadBook(book).then(
    readList => dispatch(receiveReadList(readList))
    )
  )
}

export const fetchReadBooks = id => {
  return (
    APIUtil.fetchReadBooks(id).then(
      readBooks => dispatch(receiveReadBooks(readBooks))
    )
  )
}

export const removeReadBook = readBook_id => {
  return (
    APIUtil.removeReadBook(readBook_id).then(
      readBook_id => dispatch(removeReadBook(readBook_id)))
  )
}
