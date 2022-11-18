import express from 'express';
import * as auth from '../auth/auth.js'
import middleware from './middleware.js';
import router from './router.js';
import * as dotenv from 'dotenv';
import { connectMongoDB, connectMySQL } from './database.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(auth.auth);
app.use(middleware);
app.use(router);

const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

process.on("unhandledRejection", err => {
  console.error(`An error occurred: ${err}`)
  server.close(() => process.exit(1))
})

connectMongoDB();
connectMySQL();
