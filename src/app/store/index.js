import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';

const initialState = {};
const enhancers = [];

/* global window */
/* eslint no-underscore-dangle: "off" */
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const setupStore = (history) => {
  const middleware = [thunk, routerMiddleware(history)];

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
  );
  return createStore(
    connectRouter(history)(createRootReducer(history)),
    initialState,
    composedEnhancers,
  );
};

export default setupStore;
