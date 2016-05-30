import {combineReducers} from 'redux';

import mazeData from './mazeData.reducer';

const rootReducer = combineReducers({
  mazeData
});

export default rootReducer;
