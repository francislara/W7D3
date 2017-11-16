import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer.js';

const rootReducer = combineReducers({
  entitities: entitiesReducer
});

export default rootReducer;
