import {
    ADMIN_GET_MEMBER_LIST,
    ADMIN_GET_MEMBER_SUCCESS,
    ADMIN_GET_MEMBER_FAILURE
} from './ActionTypes';
import axios from 'axios';

export function getMemberList(username) {
  return (dispatch) => {
    return axios.get('/api/account/search/' + username)
      .then((response) => {
        dispatch(getMemberSuccess(response.data));
      }).catch((error) => {
        dispatch(getMemberFailure());
      }
    );
  };
}

export function getMemberSuccess(data) {
    return {
        type: ADMIN_GET_MEMBER_SUCCESS,
        data
    };
}

export function getMemberFailure() {
    return {
        type: ADMIN_GET_MEMBER_FAILURE
    };
}
