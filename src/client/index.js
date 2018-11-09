import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';

import setupStore from '../app/store';
import App from '../app/App';

const history = createHistory();
const store = setupStore(history);

/* global document */
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

if (process.env.NODE_ENV == 'development' && module.hot) {
  module.hot.accept('../app/App', () => {
    const NewApp = require('../app/App').default;
    render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <NewApp />
        </ConnectedRouter>
      </Provider>,
      document.getElementById('root'),
    );
  });
}
