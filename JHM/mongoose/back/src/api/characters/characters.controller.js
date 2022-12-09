import * as charactersBll from './characters.bll.js';

async function getAll(req, res) {
  const userId = req.userId;
  const characters = await charactersBll.getAll({ userId });
  res.json(characters);
}

async function getById(req, res) {
  const { id } = req.params;
  const character = await charactersBll.getById({ id });
  if (character) {
    res.json(character);
  } else {
    res.status(404);
    res.send('Character not found');
  }
}

async function getByName(req, res) {
  const { name } = req.params;
  const character = await charactersBll.getById({ name });
  if (character) {
    res.json(character);
  } else {
    res.status(404);
    res.send('Character not found');
  }
}

async function create(req, res) {
  const character = req.body;
  const newCharacter = await charactersBll.create({ character });
  res.json(newCharacter);
}

async function updateById(req, res) {
  const { id } = req.params;
  const fieldsToUpdate = req.body;
  const characterToUpdate = await charactersBll.updateById({ id, fieldsToUpdate });
  res.json(characterToUpdate);
}

async function deleteById(req, res) {
  const { id } = req.params;
  const deleteResponse = await charactersBll.deleteById({ id });
  console.log(deleteResponse);
  res.write('Deleted element');
  res.end();
}

export { getAll, getById, getByName, create, updateById, deleteById };
