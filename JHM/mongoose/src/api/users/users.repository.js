import userModel from './users.model.js';

async function getByUsername({username}) {
  const user = await userModel.findOne({username});
  return user;
}

async function insert({ username, password }) {
  const user = await userModel.create({ username, password });
  return user;
}

export { getByUsername, insert };
