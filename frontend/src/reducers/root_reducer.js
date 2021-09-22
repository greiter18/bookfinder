import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducers';
import wishlists from './wishlist_reducer'
import readbooks from './readbooks_reducer'

const RootReducer = combineReducers({
  session,
  errors,
  wishlists,
  readbooks
});

export default RootReducer;