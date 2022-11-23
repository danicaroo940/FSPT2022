import jwt from 'jsonwebtoken';
import sha256 from 'crypto-js/sha256.js';
import userModel from '../database/usersMongoDB.js';

function auth(req, res, next) {
  if ((req.url === "/login" || req.url === "/register") && req.method === "POST") {
    return next();
  }

  const { authorization } = req.headers;
  if (!authorization) {return errResponse(res, 400, "Authorization token not found.")}

  jwt.verify(authorization, process.env.AUTH_SECRET_KEY, (error, payload) => {
    if (error) {
      console.error('ERROR:', error.message);
      return errResponse(res, 401, "Invalid token.")
    } else {
      req.username = payload.username;
      req.role = payload.role;
      console.log("Token validated.")
      return next();
    }
  })
}

async function login(req, res) {
  const { id, password } = req.body;
  if (!id || !password) {return errResponse(res, 400, "No user / password parameters.")};
  const encryptedPassword = sha256(password).toString();
  if (id.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)) {
    try {
      const getUser = await userQuery({email:id, password:encryptedPassword})
      if (!getUser) {return errResponse(res, 401, "Wrong user / password.")};
      const token = getToken({username:getUser.username, role:getUser.role});
      res.json({ token });
    }
    catch {return errResponse(res, 400, err)}
  } else if (id.match(/\w{5,20}/)) {
    try {
      const getUser = await userQuery({username:id, password:encryptedPassword})
      if (!getUser) {return errResponse(res, 401, "Wrong user / password.")};
      const token = getToken({username:getUser.username, role:getUser.role});
      res.json({ token });
    }
    catch {return errResponse(res, 400, err)}
  } else {return errResponse(res, 400, "Invalid username or email.")}
}

async function register(req, res) {
  const { username, password, email, role } = req.body;
  const usernameExists = await userQuery({username});
  const emailExists = await userQuery({email});
  
  if (!username || !password || !email) {
    return errResponse(res, 400, "Parameters missing: username, password and/or email.")
  };
  if (usernameExists || emailExists) {
    return errResponse(res, 400, "Username / email already exists.")
  };
  if (password.length < 6) {
    return errResponse(res, 400, "Password less than 6 characters.")
  };
  if (!username.match(/\w{5,20}/)) {
    return errResponse(res, 400, "Username must be 5-20 characters long and can only contain: ( a-z, A-Z, 0-9 and _ )")
  };
  if (!email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)) {
    return errResponse(res, 400, "Invalid email.")
  };
  
  const encryptedPassword = sha256(password).toString();

  try {
    await userModel.create({username, password:encryptedPassword, email, role});
    const getUser = await userQuery({username});
    const token = getToken({username:getUser.username, role:getUser.role});
    res.json({ token });
  } catch (err) {return errResponse(res, 400, err)};
}

async function adminRole(req, res, next) {
  const username = req.username;
  const role = req.role;
  if (role === "admin") {
    try {
      const getUser = await userQuery({username});
      if (getUser.role === "admin") {
        console.log("Admin access granted.")
        next();
        return;
      } else {return errResponse(res, 401, "Unauthorized: Role doesn't match with DB.")}
    } catch (err) {return errResponse(res, 400, err)};
  } else {return errResponse(res, 401, "Unauthorized: Insufficient permissions.")}
}

async function userQuery(userObj) {
  try {
    const response = await userModel.findOne(userObj, 'username role').exec();
    return response;
  } catch (err) {
    return console.error('Query on users DB returned an error:', err)
  }
}

function getToken(user) {
  const payload = {
    username: user.username,
    role: user.role
  };

  const token = jwt.sign(payload, process.env.AUTH_SECRET_KEY, {expiresIn: process.env.AUTH_EXPIRES_IN});
  return token;
}

function errResponse(res, status, message) {
  res.status(status);
  res.json(message);
}

export { auth, login, register, adminRole };