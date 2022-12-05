// bll => business logic layer

import * as charactersRepo from './characters.repository.js';

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
  const newCharacter = await charactersRepo.create({ character });
  console.log(newCharacter)
  return newCharacter;
}

async function updateById({ characterId, fieldsToUpdate }) {
  const newCharacter = await charactersRepo.updateById({ characterId, fieldsToUpdate });
  console.log(newCharacter)
  return newCharacter;
}

async function deleteById({ characterId }) {
  const deletedCharacter = await charactersRepo.updateById({ characterId, fieldsToUpdate });
  console.log(deletedCharacter)
  return deletedCharacter;
}

export { getAll, getById, getByName, create, updateById, deleteById };
