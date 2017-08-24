import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_GET_STATUS,
    AUTH_GET_STATUS_SUCCESS,
    AUTH_GET_STATUS_FAILURE,
    AUTH_LOGOUT,
    AUTH_ADD_MEMBER_SUCCESS,
    AUTH_ADD_MEMBER_FAILURE
} from './ActionTypes';
import axios from 'axios';

/* ====== AUTH ====== */

/* LOGIN */
export function loginRequest(username, password) {
    return (dispatch) => {
            dispatch(login());
            return axios.post('/api/account/signin', { username, password })
            .then((response) => {
                dispatch(loginSuccess(username));
            }).catch((error) => {
                dispatch(loginFailure());
            });
    };
}

export function login() {
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess(response) {
    return {
        type: AUTH_LOGIN_SUCCESS,
    };
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    };
}

export function getStatus() {
    return {
        type: AUTH_GET_STATUS
    };
}

export function getStatusSuccess(username) {
    return {
        type: AUTH_GET_STATUS_SUCCESS,
        username
    };
}

export function getStatusFailure() {
    return {
        type: AUTH_GET_STATUS_FAILURE
    };
}

/* LOGOUT */
export function logoutRequest() {
    return (dispatch) => {
        return axios.post('/api/account/logout')
        .then((response) => {
            dispatch(logout());
        });
    };
}

export function logout() {
    return {
        type: AUTH_LOGOUT
    };
}

/*
  ADD MEMBER
*/
export function addMemberRequest(memberdata) {
  console.log(`ACTION addMemberRequest ===${memberdata.username}`);
  return (dispatch) => {
    return axios.post('/api/account/addmember',{
      username : memberdata.username,
      password : memberdata.password,
      firstname : memberdata.firstname,
      lastname : memberdata.lastname,
      email : memberdata.email,
      permission : memberdata.permission
    }).then((response) => {
        dispatch(addMemberSuccess());
      }).catch((error) => {
        dispatch(addMemberFailure(error.response.data.code));
      }
    );
  };
}

export function addMemberSuccess() {
    return {
        type: AUTH_ADD_MEMBER_SUCCESS
    };
}

export function addMemberFailure(error) {
    return {
        type: AUTH_ADD_MEMBER_FAILURE,
        error
    };
}
