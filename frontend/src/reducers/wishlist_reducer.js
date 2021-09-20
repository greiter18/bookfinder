import {RECEIVE_WISHLIST_ALL, REMOVE_BOOK, RECEIVE_WISHLIST } from '../actions/wishlist_action';

export default function(state = {}, action){
  switch (action.type) {
    case RECEIVE_WISHLIST:
      debugger
      return action.wishlist.data
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
    default:
      return state
  }
}
