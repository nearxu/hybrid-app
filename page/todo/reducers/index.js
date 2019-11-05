import {combineReducers} from 'redux';

import {todos, visiFilter} from './todos';

export default combineReducers({
  todos,
  visiFilter,
});
