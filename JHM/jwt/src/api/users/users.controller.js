import database from '../../database/database.js'

function getAll(req, res) {
  // console.log('getAll function', req.username);
  res.json(database.users);
}

function getById(req, res) {
  const { id } = req.params;
  if (!id) {
    res.status(400);
    res.send('Empty required params');
    return;
  }

  const user = database.users.find(item => item.id === id);
  if (!user) {
    res.status(404);
    res.send('User not found');
    return;
  }

  res.json(user);
}

function getByUsername(req, res) {
  const { username } = req.params;
  if (!username) {
    res.status(400);
    res.send('Empty required params');
    return;
  }

  const user = database.users.find(item => item.username === username);
  if (!user) {
    res.status(404);
    res.send('User not found');
    return;
  }

  res.json(user);
}

function updateById(req, res) {
  const { id } = req.params;
  const userToUpdate = req.body;
  if (!id || !userToUpdate) {
    res.status(400);
    res.send('Empty required params');
    return;
  }

  const currentUserIndex = database.users.findIndex(user => user.id === id);
  if (currentUserIndex < 0) {
    res.status(404);
    res.send('User not found');
    return;
  }

  const currentUser = database.users[currentUserIndex];
  const updatedUser = { ...currentUser, ...userToUpdate };
  database.users[currentUserIndex] = updatedUser;
  res.json(updatedUser);
}

function deleteById(req, res) {
  const { id } = req.params;
  if (!id) {
    res.status(400);
    res.send('Empty required params');
    return;
  }

  const indexToDelete = database.users.findIndex(user => user.id === id);
  if (indexToDelete < 0) {
    res.status(404);
    res.send('User not found');
    return;
  }

  database.users.splice(indexToDelete, 1);
  res.write('Deleted element');
  res.end();
}

export { getAll, getById, getByUsername, updateById, deleteById };
