import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';

import createStore from '../app/store';
import App from '../app/App';

const history = createHistory();
const store = createStore(history);

const renderApp = AppComponent => render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppComponent />
    </ConnectedRouter>
  </Provider>,
  /* global document */
  document.getElementById('root'),
);

renderApp(App);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('../app/App', async () => {
    const NewApp = (await import('../app/App')).default;

    renderApp(NewApp);
  });
}
