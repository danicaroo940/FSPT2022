// bll => business logic layer

import * as charactersRepo from './characters.repository.js';

async function getAll({ userId }) {
  const characters = await charactersRepo.getAll({ userId });
  return characters;
}

async function getById({ id }) {

  // if (character) {
  //   res.json(character);
  // } else {
  //   res.status(404);
  //   res.send('Character not found');
  // }
}

async function getByName({ name }) {

  // if (character) {
  //   res.json(character);
  // } else {
  //   res.status(404);
  //   res.send('Character not found');
  // }
}

async function create({ character }) {

  // res.json(character);
}

async function updateById({ id, fieldsToUpdate }) {
  
  // res.json(characterToUpdate);
}

async function deleteById({ id }) {
  
  res.write('Deleted element');
  res.end();
}

export { getAll, getById, getByName, create, updateById, deleteById };
