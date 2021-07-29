import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';
// This pattern should be familiar to you from the full stack project
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken') // Remove the token from local storage
    APIUtil.setAuthToken(false)// Remove the token from the common axios header
    dispatch(logoutUser()) // Dispatch a logout action
};