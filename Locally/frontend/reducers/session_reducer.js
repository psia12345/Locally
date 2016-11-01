import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUserState = Object.freeze({
  session: {
    currentUser: null,
    errors: []
  }
});

const SessionReducer = (oldState = nullUserState, action) => {
  Object.freeze(oldState);
  const copyOldState = merge({}, oldState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      copyOldState[currentUser] = action.user;
      return copyOldState;
    case RECEIVE_ERRORS:
      copyOldState[errors] = action.errors;
      return copyOldState;
    case LOGOUT:
      return nullUserState;
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
