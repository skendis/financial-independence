/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { environment } from './environments/environment';
import * as express from 'express';
import * as path from 'path';
import { Schema, model, connect } from 'mongoose';

import * as api from './app/api';


const staticPath = `${__dirname}/../fnbc`;
const app = express();

app.use('/api/v1', api.default);

app.use(express.static(staticPath));

app.get('/*', function(req, res) {
  res.sendFile(path.join(`${staticPath}/index.html`));
});



// DB

// 1. Create an interface representing a document in MongoDB.
interface User {
  name: string;
  email: string;
  avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String
});

// 3. Create a Model.
const UserModel = model<User>('User', schema);

run().catch(err => console.log(err));

async function run(): Promise<void> {
  // 4. Connect to MongoDB
  await connect(environment.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  const port = process.env.port || 8080;
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
  server.on('error', console.error);
}
