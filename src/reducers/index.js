import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import navbarHeader from './navbarheaderReducer';
import user from './userReducer';
import shop from './shopReducer';

const rootReducer = combineReducers({
  form,
  navbarHeader,
  user,
  shop
});

export default rootReducer;