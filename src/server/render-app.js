import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createMemoryHistory';
import { Helmet } from 'react-helmet';
import serialize from 'serialize-javascript';

import App from '../app/App';
import setupStore from '../app/store';

function renderFullPage(url) {
  const history = createHistory({
    initialEntries: [url],
  });
  const store = setupStore(history);

  const body = renderToString(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
  );

  const helmet = Helmet.renderStatic();

  return `
    <!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="content">
                ${body}
            </div>
            <script>
              window.__PRELOADED_STATE__ = ${serialize(store.getState())};
            </script>
        </body>
    </html>
`;
}

export function renderAppFastify(req, res) {
  res.header('Content-Type', 'text/html');

  res.send(renderFullPage(req.originalUrl).body);
}

export function renderAppExpress(req, res) {
  res.send(renderFullPage(req.originalUrl));
}
