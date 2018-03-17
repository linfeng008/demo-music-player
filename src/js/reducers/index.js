import {combineReducers} from 'redux';
import counter from './counter';
import playEd from './play';

const rootReducer = combineReducers({
  counter,
  playEd
});

export default rootReducer;
