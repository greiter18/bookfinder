import {RECEIVE_READLIST_ALL, RECEIVE_READBOOK, REMOVE_READBOOK} from '../actions/readbooks_actions'

export default function(state = {}, action){
  switch (action.type) {
    case RECEIVE_READLIST_ALL:
    case RECEIVE_READBOOK:
      return action.readBook.data
    case REMOVE_READBOOK:
      const newState = Object.assign({}, state)
      delete newState[action.readBookId]
    default: 
    return state;
  }
}