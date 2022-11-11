import express from 'express';
import * as dotenv from 'dotenv';
import apiRouter from './api/router.js';
import authMiddleware from './middlewares/authMiddleware.js';
import defaultMiddleware from './middlewares/defaultMiddleware.js';

dotenv.config();

const server = express();
const port = process.env.PORT || 3000;

server.use(express.json());
server.use(authMiddleware);
server.use(defaultMiddleware);
server.use(apiRouter);

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
