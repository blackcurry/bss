import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
  status: 'INIT',
  memberData: [{
      _id: '',
      username: '',
      password: '',
      __v: '',
      created: ''
  }]
};

export default function admin(state, action) {
  if(typeof state === "undefined" )
    state = initialState;

  switch(action.type) {
    case types.ADMIN_GET_MEMBER_SUCCESS:
      return update(state, {
        status: { $set: 'SUCCESS' },
        memberData: { $set: action.data }
      });
    case types.ADMIN_GET_MEMBER_FAILURE:
      return update(state, initialState);
    default:
      return state;
  }
}
