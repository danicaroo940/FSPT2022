import { hashSync } from 'bcrypt';
import * as authBll from './auth.bll.js';
import database from '../../database/database.js';

function login(req, res) {
  const { username, password } = req.body;
  let token;

  if (!username || !password) {
    res.status(400); // Bad request
    res.send('Empty required params');
    return;
  }

  try {
    token = authBll.login({ username, password });
  } catch(err) {
    console.log(err)
    res.status(500);
    res.send(err.message);
  }

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
    password: hashSync(password, 10)
  };

  database.users.push(user);
  const token = getToken(user);
  res.json({ token });
}

export { login, register };
