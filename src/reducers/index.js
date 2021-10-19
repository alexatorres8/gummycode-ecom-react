import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import NavbarHeader from './navbarheaderReducer';

const rootReducer = combineReducers({
  form,
  NavbarHeader
});

export default rootReducer;