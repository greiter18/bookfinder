import {RECEIVE_WISHLIST_ALL, REMOVE_BOOK, RECEIVE_WISHLIST } from '../actions/wishlist_action';

export default function(state = {}, action){
  const newState = Object.assign({}, state); 
  switch (action.type) {
    case RECEIVE_WISHLIST:
      //debugger
      newState[action.wishlist.data._id] = action.wishlist.data
      return newState;
    case RECEIVE_WISHLIST_ALL:
      // debugger
       let wishlist = action.wishlists.data;
       let wishObj = {};
       for(let wish of wishlist){
        wishObj[wish._id] = wish
       }
      return wishObj;
    case REMOVE_BOOK:
      // debugger
      delete newState[action.wishlistId._id]
      return newState
    default:
      return state
  }
}
