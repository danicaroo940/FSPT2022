import sha256 from 'crypto-js/sha256.js';
import userModel from "./users.model.js";

function errResponse(res, status, message) {
  res.status(status);
  res.json(message);
}

async function getAllUsers(req, res) {
  try {
    const getCollection = await userModel.find().exec();
    res.json(getCollection);
  } catch (err) {return errResponse(res, 400, err)};
}

async function getUserById(req, res) {
  const { id } = req.params;
  if (id.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)) {
    const user = await userQuery({email:id});
    if (!user) {return errResponse(res, 404, "User not found.")};
    res.send(user);
  }
  else if (id.match(/\w{5,20}/)) {
    const user = await userQuery({username:id});
    if (!user) {return errResponse(res, 404, "User not found.")};
    res.send(user);
  } else {return errResponse(res, 404, "Invalid parameter.")};
}

async function deleteUserById(req, res) {
  const { id } = req.params;
  if (id.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)) {
    try {
      await userModel.deleteOne({email:id});
      return res.json("User deleted:");
    } catch (err) {return errResponse(res, 404, "User not found.")}
  } else if (id.match(/\w{5,20}/)) {
    try {
      await userModel.deleteOne({username:id});
      return res.json("User deleted.");
    } catch (err) {return errResponse(res, 404, "User not found.")}
  } else {return errResponse(res, 404, "Invalid parameter.")};
}

async function updateUserById(req, res) {
  const { id } = req.params;
  const body = req.body;
  body.password = sha256(body.password).toString();
  if (id.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)) {
    try {
      await userModel.updateOne({email:id},body).exec();
      return res.json("User updated.");
    } catch (err) {return errResponse(res, 404, "User not found.")}
  } else if (id.match(/\w{5,20}/)) {
    try {
      await userModel.updateOne({username:id},body).exec();
      return res.json("User updated.");
    } catch (err) {return errResponse(res, 404, "User not found.")}
  } else {return errResponse(res, 404, "Invalid parameter.")};
}

async function userQuery(userObj) {
  try {
    const response = await userModel.findOne(userObj, 'username email role').exec();
    return response;
  } catch (err) {
    return console.error('Query on users DB returned an error:', err)
  }
}

export { getAllUsers, getUserById, deleteUserById, updateUserById };
