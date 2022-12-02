import charModel from './characters.model.js'

async function getById(input) {
  const character = charModel.findOne(input).exec();
  if (!character) {throw new Error(`There are no characters that match the query.`)}
  return character;
}

async function getByName(input) {
  const character = charModel.findOne(input).exec();
  if (!character) {throw new Error(`There are no characters that match the query.`)}
  return character;
}

async function getByOwner(input) {
  const getCharacters = charModel.findOne(input).exec();
  if (!getCharacters) {throw new Error(`There are no characters that match the query.`)}
  return getCharacters;
}

async function getAll() {
  const getCharacters = charModel.find().exec();
  if (!getCharacters) {throw new Error(`There are no characters that match the query.`)}
  return getCharacters;
}

async function create(input) {
  const createCharacter = charModel.insertOne(input).exec();
  if (!createCharacter) {throw new Error(`Character creation failed.`)}
  return createCharacter;
}

async function updateById(input) {
  const updateCharacter = charModel.findeOneAndUpdate(input).exec();
  if (!updateCharacter) {throw new Error(`There are no characters that match the query.`)}
  return updateCharacter;
}

async function updateByName(input) {
  const updateCharacter = charModel.findeOneAndUpdate(input).exec();
  if (!updateCharacter) {throw new Error(`There are no characters that match the query.`)}
  return updateCharacter;
}

async function deleteById(input) {
  const deleteCharacter = charModel.findOneAndDelete(input).exec();
  if (!deleteCharacter) {throw new Error(`There are no characters that match the query.`)}
  return results;
}

async function deleteByName(input) {
  const deleteCharacter = charModel.findOneAndDelete(input).exec();
  if (!deleteCharacter) {throw new Error(`There are no characters that match the query.`)}
  return results;
}

export { getById, getByName, getByOwner, getAll, create, updateById, updateByName, deleteById, deleteByName }