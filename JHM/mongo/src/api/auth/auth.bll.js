import jwt from 'jsonwebtoken';
import { hashSync } from 'bcrypt';
import database from '../../database/database.js';

function getToken(user) {
  const payload = {
    id: user.id,
    username: user.username
  };

  const token = jwt.sign(payload, process.env.AUTH_SECRET_KEY, {
    // expiresIn: 60 * 60 // in secs
    expiresIn: process.env.AUTH_EXPIRES_IN // string
  });

  return token;
}

function login({ username, password }) {
  const user = database.users.find(dbUser => {
    const isSameUsername = dbUser.username === username;
    const isSamePassword = dbUser.password === hashSync(password, 10);
    return isSameUsername && isSamePassword;
  });

  if (!user) {
    throw new Error('Wrong credentials');
  }

  const token = getToken(user);
  return token;
}

function register() {
}

export { login, register };
