import {RECEIVE_READBOOKS_ALL, RECEIVE_READBOOK, REMOVE_READBOOK} from '../actions/readbooks_actions'

export default function(state = {}, action){
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_READBOOKS_ALL:
      debugger
      let readBook = action.readBooks.data; //array of our readbooks
      let readObj = {};
      for(let book of readBook){
        readObj[book._id] = book
      }
      return readObj;
    case RECEIVE_READBOOK:
      debugger
      newState[action.readBook.data._id] = action.readBook.data
      return newState
    case REMOVE_READBOOK:
      debugger
      delete newState[action.readBookId.data._id]
      return newState;
    default: 
    return state;
  }
}