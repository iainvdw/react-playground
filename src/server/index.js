import express from 'express';
import compression from 'compression';
import webpack from 'webpack';
import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import pino from 'pino';
import fs from 'fs';
import path from 'path';

import { renderAppExpress, renderAppFastify } from './render-app';
import config from '../../webpack.dev';

const app = express();
const port = process.env.PORT || 3000;

// Run Express!
if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(compression());
app.use(express.static('public'));
app.use('*', renderAppExpress);

app.listen(port, () => {
  console.log(`now listening on ${port}`);
});

// Run Fastify!
// const logger = pino();
// const fastifyApp = fastify({
//   ignoreTrailingSlash: true,
//   caseSensitive: false,
//   logger,
//   http2: true,
//   https: {
//     key: fs.readFileSync('certs/localhost-privkey.pem'),
//     cert: fs.readFileSync('certs/localhost-cert.pem'),
//   },
// });

// fastifyApp.register(fastifyStatic, {
//   root: path.join(__dirname, '..', '..', 'public'),
//   prefix: '/static/',
// });
// fastifyApp.get('*', renderAppFastify);

// fastifyApp.listen(3001, (err) => {
//   if (err) {
//     fastifyApp.log.error(err);
//     process.exit(1);
//   }
//   fastifyApp.log.info(`server listening on ${fastifyApp.server.address().port}`);
// });
