import {RECEIVE_READBOOKS_ALL, RECEIVE_READBOOK, REMOVE_READBOOK} from '../actions/readbooks_actions'

export default function(state = {}, action){
  switch (action.type) {
    case RECEIVE_READBOOKS_ALL:
      // debugger
      let readBook = action.readBooks.data;
      let readObj = {};
      for(let book of readBook){
        readObj[book._id] = book
      }
      return readObj;
    case RECEIVE_READBOOK:
      // debugger
      return action.readBook.data
    case REMOVE_READBOOK:
      debugger
      const newState = Object.assign({}, state)
      delete newState[action.readBookId.data._id]
      return newState;
    default: 
    return state;
  }
}