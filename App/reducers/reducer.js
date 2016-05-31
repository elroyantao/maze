import {combineReducers} from 'redux';

import mazeData from './mazeData.reducer';
import start from './start.reducer';
import end from './end.reducer';
import shortestPath from './shortestPath.reducer';
import message from './message.reducer';


const rootReducer = combineReducers({
  mazeData,start,end,shortestPath,message
});

export default rootReducer;
