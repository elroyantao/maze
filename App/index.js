import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './config/configureStore';
import App from './app';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <App ></App>
  </Provider>
),document.getElementById('root'));
