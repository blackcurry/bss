import {
    BOOK_SEARCH_EXTERNAL_API,
    BOOK_SEARCH_EXTERNAL_API_SUCCESS,
    BOOK_SEARCH_EXTERNAL_API_FAILURE,
    BOOK_REGISTER_BOOK_SELECT,
    BOOK_REGISTER,
    BOOK_REGISTER_SUCCESS,
    BOOK_REGISTER_FAILURE,
    BOOK_SEARCH,
    BOOK_SEARCH_SUCCESS,
    BOOK_SEARCH_FAILURE
} from './ActionTypes';
import axios from 'axios';

export function getSearchBookList(bookname) {
  return (dispatch) => {
    dispatch(getBookList());
    return axios.get('/api/book/search/' + bookname)
      .then((response) => {
        dispatch(getBookListSuccess(response.data));
      }).catch((error) => {
        dispatch(getBookListFailure());
      }
    );
  };
}

export function getBookListExtAPI(bookname) {
  return (dispatch) => {
    dispatch(getBookListExt());
    return axios.get('/api/book/searchExAPI/' + bookname)
      .then((response) => {
        dispatch(getBookListExtAPISuccess(response.data));
      }).catch((error) => {
        dispatch(getBookListExtAPIFailure());
      }
    );
  };
}

export function postBookRegister(bookinfo) {
  return (dispatch) => {
    dispatch(bookRegister());
    return axios.post('/api/book/register/', {bookinfo})
      .then((response) => {
        dispatch(bookRegisterSuccess(response.data));
      }).catch((error) => {
        dispatch(bookRegisterFailure());
      }
    );
  };
}

export function getBookList(data) {
    return {
        type: BOOK_SEARCH,
        data
    };
}

export function getBookListSuccess(data) {
    return {
        type: BOOK_SEARCH_SUCCESS,
        data
    };
}

export function getBookListFailure() {
    return {
        type: BOOK_SEARCH_FAILURE
    };
}
export function getBookListExt(data) {
    return {
        type: BOOK_SEARCH_EXTERNAL_API,
        data
    };
}

export function getBookListExtAPISuccess(data) {
    return {
        type: BOOK_SEARCH_EXTERNAL_API_SUCCESS,
        data
    };
}

export function getBookListExtAPIFailure() {
    return {
        type: BOOK_SEARCH_EXTERNAL_API_FAILURE
    };
}

export function getRegisterBookSelect(data) {
    return {
        type: BOOK_REGISTER_BOOK_SELECT,
        data
    };
}

export function bookRegister(data) {
    return {
        type: BOOK_REGISTER,
    };
}

export function bookRegisterSuccess(data) {
    return {
        type: BOOK_REGISTER_SUCCESS,
    };
}

export function bookRegisterFailure(data) {
    return {
        type: BOOK_REGISTER_FAILURE,
    };
}
