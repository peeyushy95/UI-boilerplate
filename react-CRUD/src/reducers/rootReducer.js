import {combineReducers} from 'redux';
import ajaxCallStatus from './ajaxStatusReducer';

const rootReducer = combineReducers({
  ajaxCallStatus,
});

export default rootReducer;
