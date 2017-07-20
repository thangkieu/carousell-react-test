/**
 * @author Thang Kieu
 *
 * Create store to hold data of app
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './app';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));
