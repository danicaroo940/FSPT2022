import * as charactersRepo from './users.repository.js';

async function getAll({ userId }) {
  const characters = await charactersRepo.getAll({ userId });
  return characters;
}

export { getAll };
