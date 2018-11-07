import express from 'express';
import fastify from 'fastify';
import pino from 'pino';

import { renderAppExpress, renderAppFastify } from './render-app';

const app = express();
const logger = pino();
const fastifyApp = fastify({
  ignoreTrailingSlash: true,
  caseSensitive: false,
  logger,
});
const port = process.env.PORT || 3000;

// Run Express!
app.use(express.static('public'));
app.use('*', renderAppExpress);

app.listen(port, () => {
  console.log(`now listening on ${port}`);
});

// Run Fastify!
// fastifyApp.get('*', renderAppFastify);

// fastifyApp.listen(3001, (err) => {
//   if (err) {
//     fastifyApp.log.error(err);
//     process.exit(1);
//   }
//   fastifyApp.log.info(`server listening on ${fastifyApp.server.address().port}`);
// });
