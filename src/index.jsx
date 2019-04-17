/* global document window */
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

/* LOG REDUX STORE ON CONSOLE */
import logger from 'redux-logger';

import reducers from './reducers';
import { env } from './utils/variables';

// import './assets/styles/default.sass';
// import * as serviceWorker from './serviceWorker';

let store;
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

if (env.REACT_APP_STAGE !== 'production') {
  store = createStore(reducers,
    composeEnhancers(
      applyMiddleware(logger, thunk),
    ));
} else {
  store = createStore(reducers,
    compose(
      applyMiddleware(thunk),
    ));
}

ReactDOM.render(
  <Provider store={store}>
    <h1>Open HOST</h1>
  </Provider>,
  document.getElementById('root'),
);

// serviceWorker.register();
