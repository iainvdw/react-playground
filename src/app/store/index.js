import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import createRootReducer from './rootReducer';
import initSagas from './rootSaga';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

// Setup Redux store with routing and thunks
const setupStore = (history) => {
  const middleware = [sagaMiddleware, routerMiddleware(history)];

  // Merge enhancers
  const composedEnhancers = composeWithDevTools(applyMiddleware(...middleware));

  // Build the store
  const store = createStore(
    connectRouter(history)(createRootReducer(history)),
    initialState,
    composedEnhancers,
  );

  initSagas(sagaMiddleware);

  // Hot reload reducers
  if (module.hot) {
    module.hot.accept('./rootReducer', async () => {
      const createNewRootReducer = (await import('./rootReducer')).default;

      store.replaceReducer(createNewRootReducer(history));
    });
  }

  // Create the store
  return store;
};

export default setupStore;
