import { Types } from "mongoose";
import characterModel from './characters.model.js';

const { ObjectId } = Types;

async function getAll({ userId }) {
  const characters = await characterModel
    // .find({ owner: ObjectId(userId) }, { _id: 0 })
    .find({ owner: ObjectId(userId) })
    // .populate('owner')
    .populate({
      path: 'owner',
      select: 'username -_id'
    })
    .lean();

  return characters;
}

async function getById({ id }) {
  // const character = await characterModel.findById({ _id: id });
  const character = await characterModel.findOne({ _id: ObjectId(id) });
  return character;
}

async function getByName({ name }) {
  const character = await characterModel.findOne({ name });
  return character;
}

async function create({ character }) {
  const newCharacter = await characterModel.create(character);
  return newCharacter;
}

async function updateById({ id, fieldsToUpdate }) {
  // const query = { _id: characterId };
  const query = { _id: ObjectId(id) };
  const updateBody = { $set: fieldsToUpdate };
  // const character = await characterModel.updateById(query, updateBody);
  const character = await characterModel.updateOne(query, updateBody);
  console.log(character)
  return character;
}

async function deleteById({ id }) {
  // const characters = await characterModel.findByIdAndDelete({ _id: id });
  // const characters = await characterModel.delete({ _id: ObjectId(id) });
  console.log('delete', id);
  return {};
}

export { getAll, getById, getByName, create, updateById, deleteById };
