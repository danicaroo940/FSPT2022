import database from '../../database/database.js';

function getById(req, res) {
  const { id } = req.params;
  const character = database.find(item => item.id === parseInt(id));
  if (character) {
    res.json(character);
  } else {
    res.status(404);
    res.send('Character not found');
  }
}

function getByName(req, res) {
  const { name } = req.params;
  const character = database.find(item => item.name === name);
  if (character) {
    res.json(character);
  } else {
    res.status(404);
    res.send('Character not found');
  }
}

function create(req, res) {
  const character = req.body;
  character.id = database[database.length - 1].id + 1;
  database.push(character);
  res.json(character);
}

function updateById(req, res) {
  const { id } = req.params;
  const newCharacter = req.body;
  const currentCharacter = database.find(item => item.id === parseInt(id));
  const characterToUpdate = { ...currentCharacter, ...newCharacter };
  database[id - 1] = characterToUpdate;
  res.json(characterToUpdate);
}

function deleteById(req, res) {
  const { id } = req.params;
  const index = database.findIndex(item => item.id === parseInt(id));
  database.splice(index, 1);
  res.write('Deleted element');
  res.end();
}

export { getById, getByName, create, updateById, deleteById };

// {
//   "name": "Aragorn",
//   "height": 1.80,
//   "width": 80,
//   "race": "human",
//   "color": "???"
// }