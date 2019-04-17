/* global document window */
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

/* LOG REDUX STORE ON CONSOLE */
import logger from 'redux-logger';

import Routers from './routers';
import reducers from './reducers';
import { env } from './utils/variables';

import './assets/styles/main.sass';
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
    <Routers />
  </Provider>,
  document.getElementById('root'),
);

// serviceWorker.register();
