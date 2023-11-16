import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './components/redux/store.js'
import  App  from 'components/App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
document.getElementById('root')
)
