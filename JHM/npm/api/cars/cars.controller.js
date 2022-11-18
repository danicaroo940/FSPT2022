const database = [
  {
    id: '1',
    name: 'Rayo',
    surname: 'McQueen'
  },
  {
    id: '2',
    name: 'Mate'
  },
  {
    id: '3',
    name: 'Batmovil'
  },
  {
    id: '4',
    name: 'Kit'
  },
];

function getById(req, res) {
  const { id } = req.params;
  const car = database.find(item => item.id === id);
  res.json(car);
}

function getByName(req, res) {
  const { name } = req.params;
  const car = database.find(item => item.name === name);
  res.json(car);
}

export { getById, getByName };
