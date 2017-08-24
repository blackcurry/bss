import auth from './auth';
import admin from './admin';
// import memo from './memo';
// import search from './search';


import { combineReducers } from 'redux';

export default combineReducers({
  auth, admin
});
