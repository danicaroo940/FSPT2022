import express from 'express';
import apiRouter from './api/router.js';
import { checkUser, loginUser } from './api/users/users.controller.js';
// import { database } from './api/users/users.controller.js';

function middleware(request, response, next) {
  console.log(`I'm the middleware of ${request.url} ${ request.method } request`);
  const token = request.headers.authorization;
  const userName = request.body.username;
  const password = request.body.password;

  // response.json(req);
  const authOk = checkUser(userName, password, token);
  if(request.url === '/users/login'){
    loginUser(request,response);
    return;
  }
  else if(authOk){
    console.log('estas dentro baby');
    response.send('se acabo, entraste baby');
    return;
  }
  else {
    response.status(401);
    response.send ('you need authorization');
    return;
  }
  // Websites to allow
  // response.setHeader('Access-Control-Allow-Origin', '*');

  // // Request methods to allow
  // response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');

  // // Request headers to allow
  // response.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-Access-Token, XKey, Authorization');

  next();
}

const server = express();
const port = 3002;

server.use(express.json());
server.use(middleware);
server.use(apiRouter);

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
// traer la ruta users. y traeerr todos los usuarios de la base de datos... getALL