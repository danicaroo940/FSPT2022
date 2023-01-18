function middleware(request, response, next) {

  // Websites to allow
  response.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods to allow
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');

  // Request headers to allow
  response.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-Access-Token, XKey, Authorization');

  next();
}

export default middleware;
