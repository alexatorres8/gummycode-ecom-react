import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import navbarHeader from './navbarheaderReducer';

const rootReducer = combineReducers({
  form,
  navbarHeader
});

export default rootReducer;