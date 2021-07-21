import * as BooksApiUtil from '../util/books_util';

export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';

export const receiveAllBooks = books => ({
  type: RECEIVE_ALL_BOOKS,
  books
})


export const findBooks = books => dispatch => {
  return BooksApiUtil.findBooks(books)
    .then(books => dispatch(receiveAllBooks(books)))
    .catch(err => console.log(err))
}