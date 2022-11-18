import http from 'http';
import { serverRouter } from './server.mjs';

const port = 3000;

const server = http.createServer(serverRouter);

server.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
