const database = [
  {
    id: '1',
    name: 'Jona',
  },
  {
    id: '2',
    name: 'German',
  },
  {
    id: '3',
    name: 'Dani',
  },
  {
    id: '4',
    name: 'Laura',
  },
  {
    id: '5',
    name: 'Alberto',
  },
  {
    id: '6',
    name: 'Edu',
  },
  {
    id: '7',
    name: 'Cristian',
  },
  {
    id: '8',
    name: 'Charlotte',
  }
];

function getById(req, res) {
  const { id } = req.params;
  const user = database.find(item => item.id === id);
  res.json(user);
}

function getByName(req, res) {
  const { name } = req.params;
  const user = database.find(item => item.name === name);
  res.json(user);
}

export { getById, getByName };
