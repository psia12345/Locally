import {LOGIN, LOGOUT, SIGNUP, FETCH_USER,
        receiveCurrentUser,
        receiveErrors } from '../actions/session_actions';
import {login, logout, signup, show} from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorLog = errors => dispatch(receiveErrors(errors.responseJSON));

  switch(action.type){
    case LOGIN:
      login(action.user, successCallback, errorLog);
      return next(action);
    case LOGOUT:
      logout(()=> next(action));
      break;
    case SIGNUP:
      signup(action.user, successCallback, errorLog);
      return next(action);
    case FETCH_USER:
      show(action.id, successCallback, errorLog);
      return next(action);
    default:
      return next(action);
  }
};
