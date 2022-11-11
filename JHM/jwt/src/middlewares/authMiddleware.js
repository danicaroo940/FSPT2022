import jwt from 'jsonwebtoken';

function unauthorized(response) {
  response.status(401);
  response.send('Unauthorized');
}

function middleware(request, response, next) {
  const publicRoutes = [
    '/login',
    '/register'
  ];

  // const isPublicRoute = publicRoutes.includes(request.url);
  const isPublicRoute = publicRoutes.some((publicRoute) => publicRoute === request.url);
  if (isPublicRoute) {
    next();
    return;
  }

  const token = request.headers.authorization;

  if (!token) {
    return unauthorized(response);
  }

  jwt.verify(token, process.env.AUTH_SECRET_KEY, (error, payload) => {
    if (error) {
      console.error('ERROR!', error.message);
      return unauthorized(response);
    } else {
      request.username = payload.username;
      next();
    }
  });
}

export default middleware;
