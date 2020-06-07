import { combineReducers } from 'redux';
import UIReducer from './UIReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  UI: UIReducer,
  LoginStatus: loginReducer
});

export default rootReducer;
