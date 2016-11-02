import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUserState = Object.freeze({
    currentUser: null,
    errors: []
});

const SessionReducer = (oldState = nullUserState, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUserState, {currentUser});
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUserState, {errors});
    case LOGOUT:
      return merge({}, nullUserState);
    default:
      return oldState;
  }
}

export default SessionReducer;

//sample state
// {
//   session: {
//     currentUser: null,
//     errors: ["invalid credentails"]
//   }
// }
