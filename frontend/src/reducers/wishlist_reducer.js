import {RECEIVE_WISHLIST_ALL, REMOVE_BOOK } from '../actions/wishlist_action';

export default function(state = {}, action){
  switch (action.type) {
    case RECEIVE_WISHLIST_ALL:
      return {books: action.book}
    case REMOVE_BOOK:
      const newState = Object.assign({}, state, action.routes);
      delete newState[action.bookId]
      return newState
    default:
      return state
  }
}