import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { drizzleReducers } from 'drizzle';
import newReducer from './event/new';

const reducer = combineReducers({
  routing: routerReducer,
  new: newReducer,
  ...drizzleReducers,
});

export default reducer;
