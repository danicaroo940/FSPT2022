import { ObjectId }  from 'mongodb';
// import { db } from '../../database.js';
import characterModel from './characters.model.js';

// const charactersCollection = db.collection('characters');

async function getAll({ userId }) {
  const characters = await characterModel.find({owner: ObjectId(userId)}).toArray();
  console.log(characters)
  return characters;
}

// export { getAll, getById, getByName, create, updateById, deleteById };
export { getAll };
