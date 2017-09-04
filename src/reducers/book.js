import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
  searchExtStatus: 'INIT',
  searchStatus: 'INIT',
  registerStatus: 'INIT',
  bssBookData: [{
      title: '',
      link: '',
      image: '',
      author: '',
      price: '',
      discount: '',
      publisher: '',
      pubdate: '',
      isbn: '',
      description: ''
  }],
  bookData: [{
      title: '',
      link: '',
      image: '',
      author: '',
      price: '',
      discount: '',
      publisher: '',
      pubdate: '',
      isbn: '',
      description: ''
  }],
  registerBook: {
      title: '',
      link: '',
      image: '',
      author: '',
      price: '',
      discount: '',
      publisher: '',
      pubdate: '',
      isbn: '',
      description: ''
  }
};

export default function book(state, action) {
  if(typeof state === "undefined" )
    state = initialState;
  switch(action.type) {
    case types.BOOK_SEARCH:
      return update(state, {
        searchStatus: { $set: 'PROGRESS' },
      });
    case types.BOOK_SEARCH_SUCCESS:
      return update(state, {
        searchStatus: { $set: 'SUCCESS' },
        bssBookData: { $set: action.data.bookinfo }
      });
    case types.BOOK_SEARCH_FAILURE:
      return update(state, {
        searchStatus: { $set: 'FAIL' }
      });
    case types.BOOK_SEARCH_EXTERNAL_API:
      return update(state, {
        searchExtStatus: { $set: 'PROGRESS' },
      });
    case types.BOOK_SEARCH_EXTERNAL_API_SUCCESS:
      return update(state, {
        searchExtStatus: { $set: 'SUCCESS' },
        bookData: { $set: action.data.bookinfo }
      });
    case types.BOOK_SEARCH_EXTERNAL_API_FAILURE:
      return update(state, {
        searchExtStatus: { $set: 'FAIL' }
      });
    case types.BOOK_REGISTER_BOOK_SELECT:
      console.log('action::::'+action.data);
      return update(state, {
        registerBook: { $set: action.data }
      });
    case types.BOOK_REGISTER:
      return update(state, {
        registerStatus: { $set: 'PROGRESS' }
      });
    case types.BOOK_REGISTER_SUCCESS:
      return update(state, {
        registerStatus: { $set: 'SUCCESS' }
      });
    case types.BOOK_REGISTER_FAILURE:
      return update(state, {
        registerStatus: { $set: 'FAIL' }
      });
    default:
      return state;
  }
}
