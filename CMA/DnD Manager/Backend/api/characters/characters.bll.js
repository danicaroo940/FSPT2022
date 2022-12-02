import * as Repository from './characters.repository.js';

async function getById(input) {
  const { id } = input;
  const results = Repository.getById(id);
  return results;
}

async function getByName(input) {
  const { name } = input;
  const results = Repository.getByName(name);
  return results;    
}

async function getByOwner(input) {
  const { class:charClass } = input;
  const results = Repository.getByClass(charClass);
  return results;
}

async function getAll() {
  const results = Repository.getAll();
  return results;
}

async function create(input) {
  const { name, gender, race, class:charClass, owner } = input;
  const results = Repository.createCharacter(name, gender, race, charClass, owner);
  return results;
}

async function updateById(input) {
  const { name, gender, race, class:charClass, owner } = input;
  const results = Repository.createCharacter(name, gender, race, charClass, owner);
  return results;
}

async function updateByName(input) {
  const { name, gender, race, class:charClass, owner } = input;
  const results = Repository.createCharacter(name, gender, race, charClass, owner);
  return results;
}

async function deleteById(input) {
  const { id } = input;
  const results = Repository.deleteById(id);
  return results;
}

async function deleteByName(input) {
  const { name } = input;
  const results = Repository.deleteByName(name);
  return results;
}

export { getById, getByName, getByOwner, getAll, create, updateById, updateByName, deleteById, deleteByName }