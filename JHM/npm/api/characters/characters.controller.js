const database = [
  {
    id: 1,
    name: 'Seth',
    height: 2.02,
    width: 200,
    race: 'lizardman',
    color: 'green'
  },
  {
    id: 2,
    name: 'Resha',
    height: 1.60,
    width: 60,
    race: 'elve',
    color: 'white'
  },
  {
    id: 3,
    name: 'Baruk',
    height: 1.50,
    width: 90,
    race: 'dwarf',
    color: 'brown'
  },
  {
    id: 4,
    name: 'Drax',
    height: 1.20,
    width: 40,
    race: 'goblin',
    color: 'purple'
  }
];

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