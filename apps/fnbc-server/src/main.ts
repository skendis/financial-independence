/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { environment } from './environments/environment';
import * as express from 'express';
import * as path from 'path';
import { connect } from 'mongoose';

import * as api from './app/api';

const staticPath = `${__dirname}/../fnbc`;
const app = express();

app.use('/api/v1', api.default);

app.use(express.static(staticPath));

app.get('/*', function(req, res) {
  res.sendFile(path.join(`${staticPath}/index.html`));
});


run().catch(err => console.log(err));

async function run(): Promise<void> {
  // 4. Connect to MongoDB
  await connect(environment.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  // Run express app
  const port = process.env.port || 8080;
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
  server.on('error', console.error);
}
