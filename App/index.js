import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './config/configureStore';
import App from './app';

require('./style.less');

let initialState = {
  message : {
    type : 'noaction',
    text : 'Please enter your data'
  }
}
const store = configureStore(initialState);

ReactDOM.render((
  <Provider store={store}>
    <App ></App>
  </Provider>
),document.getElementById('root'));
