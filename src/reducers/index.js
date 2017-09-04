import auth from './auth';
import admin from './admin';
import book from './book';
// import search from './search';


import { combineReducers } from 'redux';

export default combineReducers({
  auth, admin, book
});
