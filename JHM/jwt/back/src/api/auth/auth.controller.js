import jwt from 'jsonwebtoken';
import sha256 from 'crypto-js/sha256.js';
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

function login(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400); // Bad request
    res.send('Empty required params');
    return;
  }

  const user = database.users.find(dbUser => {
    const isSameUsername = dbUser.username === username;
    const isSamePassword = dbUser.password === sha256(password).toString();
    return isSameUsername && isSamePassword;
  });

  if (!user) {
    res.status(500);
    res.send('Wrong credentials');
    return;
  }

  const token = getToken(user);
  res.json({ token });
}

function register(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    res.send('Empty required params');
    return;
  }

  const user = {
    id: `${username}Id`,
    username,
    password: sha256(password).toString(),
  };

  database.users.push(user);
  const token = getToken(user);
  res.json({ token });
}

export { login, register };
