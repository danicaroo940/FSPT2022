import { db } from '../../database.js';

const usersCollection = db.collection('users');

async function getByUsername({username}) {
  const user = await usersCollection.find({username});
  return user;
}

async function insert({ username, password }) {
  const insertResponse = await usersCollection.insertOne({ username, password });
  return insertResponse.insertedId;
}

export { getByUsername, insert };
