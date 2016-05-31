import {combineReducers} from 'redux';

import mazeData from './mazeData.reducer';
import start from './start.reducer';
import end from './end.reducer';
import shortestPath from './shortestPath.reducer';

const rootReducer = combineReducers({
  mazeData,start,end,shortestPath
});

export default rootReducer;
