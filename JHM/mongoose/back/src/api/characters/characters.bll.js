import * as charactersRepo from './characters.repository.js';
import * as usersRepo from '../users/users.repository.js';

// https://jsdoc.app/tags-example.html
// https://devhints.io/jsdoc

/**
* @typedef { Object } getAllParams
* @property { string } userId - mongo id of a user as string
*/

/**
* @memberof charactersBllMethods
* @method getAll - get all characters from a user
* @async
* @param { getAllParams } getAllParams - named params to getAll function
* @return { Array }
* @throws { error }
*/
async function getAll({ userId }) {
  const characters = await charactersRepo.getAll({ userId });
  const charactersCopy = characters.map((character) => {
    character.ownerName = character.owner.username;
    delete character.owner;
    return character;
  });

  return charactersCopy;
}

async function getById({ id }) {
  const character = await charactersRepo.getById({ id });
  return character;
}

async function getByName({ name }) {
  const character = await charactersRepo.getByName({ name });
  return character;
}

async function create({ character }) {
  const { ownerName } = character;
  delete character.ownerName;
  const user = await usersRepo.getByUsername({ username: ownerName });
  character.owner = user._id;
  const newCharacter = await charactersRepo.create({ character });
  return newCharacter;
}

async function updateById({ id, fieldsToUpdate }) {
  const newCharacter = await charactersRepo.updateById({ id, fieldsToUpdate });
  console.log(newCharacter)
  return newCharacter;
}

async function deleteById({ id }) {
  const deletedCharacter = await charactersRepo.deleteById({ id });
  console.log(deletedCharacter);
  return deletedCharacter;
}

/**
 * @author Jona Hidalgo <jona.hidalgo@thebridge.com> 
 * @exports charactersBllMethods 
 * @namespace charactersBllMethods 
 */
export { getAll, getById, getByName, create, updateById, deleteById };
