import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import locale from './locale-reducer';
import simple from './simple-reducer';

export default combineReducers({
	routing: routerReducer,
  	locale,
  	simple
});
