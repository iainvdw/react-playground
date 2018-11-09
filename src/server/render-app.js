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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            <link rel="icon shortcut" href="/static/favicon.ico" />
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="root">
                ${body}
            </div>
            <script>
              window.__PRELOADED_STATE__ = ${serialize(store.getState())};
            </script>

            <script defer src="dist/manifest.bundle.js"></script>
            <script defer src="dist/vendor.bundle.js"></script>
            <script defer src="dist/main.bundle.js"></script>
        </body>
    </html>
`;
}

export function renderAppFastify(req, res) {
  console.log(req.raw.headers.scheme !== 'https');

  if (req.raw.headers.scheme !== 'https') {
    console.log('no https!');
  }

  res.header('Content-Type', 'text/html');
  res.send(renderFullPage(req.raw.originalUrl));
}

export function renderAppExpress(req, res) {
  res.send(renderFullPage(req.originalUrl));
}
