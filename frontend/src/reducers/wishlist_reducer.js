import {RECEIVE_WISHLIST_ALL} from '../actions/wishlist_action';

export default function(state = initialState, action){
  switch (action.type) {
    case RECEIVE_WISHLIST_ALL:
      return {books: action.book}
    default:
      break;
  }
}