import {createStore} from 'redux';
import RootReducer from '../reducers/root_reducer';
import RootMiddleware from '../middlewares/root_middleware';

const configStore = (preloadedState = {}) => (
  createStore(RootReducer, preloadedState, RootMiddleware)
);

export default configStore;
