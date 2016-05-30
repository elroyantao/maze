import {createStore} from 'redux';

import rootReducer from '../reducers/reducer';

export default function(initialState={}){
  const store = createStore(rootReducer,initialState);
  return store;
}
