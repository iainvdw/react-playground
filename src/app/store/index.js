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

// Setup Redux store with routing and thunks
const setupStore = (history) => {
  const middleware = [thunk, routerMiddleware(history)];

  // Merge enhancers
  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
  );

  // Build the store
  const store = createStore(
    connectRouter(history)(createRootReducer(history)),
    initialState,
    composedEnhancers,
  );

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const createNewRootReducer = require('./reducers').default;

      store.replaceReducer(createNewRootReducer(history));
    });
  }

  // Create the store
  return store;
};

export default setupStore;
