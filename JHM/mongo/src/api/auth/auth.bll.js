import jwt from 'jsonwebtoken';
import { hashSync } from 'bcrypt';
import * as usersRepository from '../users/users.repository.js'
// import database from '../../database/database.js';

function getToken(user) {
  const payload = {
    id: user._id,
    username: user.username
  };

  const token = jwt.sign(payload, process.env.AUTH_SECRET_KEY, {
    // expiresIn: 60 * 60 // in secs
    expiresIn: process.env.AUTH_EXPIRES_IN // string
  });

  return token;
}

async function login({ username, password }) {
  const user = await usersRepository.getByUsername(username);
  if (!user) {
    throw new Error('Wrong credentials');
  }

  const isSamePassword = user.password === hashSync(password, 10);
  if (!isSamePassword) {
    throw new Error('Wrong credentials')
  }

  const { _id, username } = user;
  const token = getToken({ _id, username });
  return token;
}

async function register({ username, password }) {
  const hashedPassword = hashSync(password, 10);
  const _id = await usersRepository.insert({ username, password: hashedPassword });
  if (!_id) {
    throw new Error('Some problem at insert');
  }

  const token = getToken({ username, _id });
  return token;
}

export { login, register };
