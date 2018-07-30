import { combineReducers } from 'redux';
import counterReducer from './CounterReducer'

const reducers = {
  counterReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;