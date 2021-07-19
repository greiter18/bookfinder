import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger'

const configureStore = (preloadedState = {}) => {
  let middleware = [thunk, logger];
  if (process.env.NODE_ENV === 'production') {
    middleware = [thunk];
  }
  return createStore(rootReducer, preloadedState, applyMiddleware(...middleware))
};

export default configureStore;