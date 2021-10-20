import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import navbarHeader from './navbarheaderReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  form,
  navbarHeader,
  user
});

export default rootReducer;