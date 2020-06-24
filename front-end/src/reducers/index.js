import { combineReducers } from 'redux';
import UIReducer from './UIReducer';
import loginReducer from './loginReducer';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
  UI: UIReducer,
  LoginStatus: loginReducer,
  CourseStatus: courseReducer
});

export default rootReducer;
