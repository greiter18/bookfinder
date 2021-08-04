import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";


export const receiveCurrentUser = currentUser => ({ // We'll dispatch this when our user signs in
    type: RECEIVE_CURRENT_USER,
    currentUser
});

// export const receiveUserSignIn = () => ({// This will be used to redirect the user to the login page upon signup
//     type: RECEIVE_USER_SIGN_IN
// });
  
export const receiveErrors = errors => ({ // We dispatch this one to show authentication errors on the frontend
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const logoutUser = () => ({ // When our user is logged out, we will dispatch this action to set isAuthenticated to false
    type: RECEIVE_USER_LOGOUT
});


export const signup = user => dispatch => {
  debugger
  return(
    APIUtil.signup(user).then(res => {
        const { token } = res.data; 
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded));
    })
    .catch(errors => {
        dispatch(receiveErrors(errors.response.data));
    })
  )}

export const login = user => dispatch => ( // Upon login, set the session token and dispatch the current user. Dispatch errors on failure.
    APIUtil.login(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);//pulling the payload
        dispatch(receiveCurrentUser(decoded))//hads the current user and id
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })
)

// We wrote this one earlier
export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
};




//old way
// export const signup = user => dispatch => {// Upon signup, dispatch the approporiate action depending on which type of response we receieve from the backend
//   return (
//     APIUtil.signup(user).then(() => (
//         dispatch(receiveUserSignIn())
//     ), err => (
//         dispatch(receiveErrors(err.response.data))
//     ))
//   )};