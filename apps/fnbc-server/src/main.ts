/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import * as api from './app/api';

const staticPath = `${__dirname}/../fnbc`;
const app = express();

app.use(express.static(staticPath));

app.use('/api/v1', api.default);

app.get('/*', function(req, res) {

  res.sendFile(path.join(`${staticPath}/index.html`));
});

const port = process.env.port || 8080;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
