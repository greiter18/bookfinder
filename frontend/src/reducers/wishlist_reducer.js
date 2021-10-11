import {RECEIVE_WISHLIST_ALL, REMOVE_BOOK, RECEIVE_WISHLIST } from '../actions/wishlist_action';

export default function(state = {}, action){
  switch (action.type) {
    case RECEIVE_WISHLIST:
      debugger
      const nuState = Object.assign({}, state);
      nuState[action.wishlist.data._id] = action.wishlist.data
      return nuState;
    case RECEIVE_WISHLIST_ALL:
      console.log('wishlistttttttt',action)
      // debugger
       let wishlist = action.wishlists.data;
       let wishObj = {};
       for(let wish of wishlist){
        wishObj[wish._id] = wish
       }
       console.log('wishObj',wishObj)
      return wishObj;
    case REMOVE_BOOK:
      // debugger
      const newState = Object.assign({}, state);
      // console.log('wishlistACTIONNNNNN',action.wishList)
      delete newState[action.wishlistId._id]
      return newState
    default:
      return state
  }
}
