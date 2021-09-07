import {RECEIVE_WISHLIST_ALL, REMOVE_BOOK } from '../actions/wishlist_action';

export default function(state = {}, action){
  switch (action.type) {
    case RECEIVE_WISHLIST_ALL:
      console.log('wishlistttttttt',action)
      debugger
       let wishlist = action.wishlists.data;
       let wishObj = {};
       for(let wish of wishlist){
        wishObj[wish._id] = wish
       }
       console.log('wishObj',wishObj)
      return wishObj;
    case REMOVE_BOOK:
      const newState = Object.assign({}, state);
      delete newState[action.bookId]
      return newState
    case RECEIVE_BOOK_FROM_LIST:
    default:
      return state
  }
}
