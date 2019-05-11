/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { loadStorage, saveStorage } from '../utils/localStorage';
import reducers from './reducers';
import { env } from '../utils/variables';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const persistedState = loadStorage();

const middlewares = [];
if (env.REACT_APP_STAGE === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(
    applyMiddleware(
      thunk,
      ...middlewares,
    ),
  ),
);

store.subscribe(() => saveStorage(store.getState()));

export default store;
