import { combineReducers } from 'redux';
import locale from './locale-reducer';
import simple from './simple-reducer';

export default combineReducers({
  	locale,
  	simple
});
