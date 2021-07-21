import RECEIVE_ALL_BOOKS from '../actions/books_action';

const booksReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_BOOKS:
      return {books: action.item}
    default:
      return state;
  }
}

export default booksReducer;