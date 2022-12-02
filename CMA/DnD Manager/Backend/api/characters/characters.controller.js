import * as BLL from './characters.bll.js';

async function getById(req, res) {
  const { id } = req.params;
  const user = req.user; 
  try {
    const results = await BLL.getById({ _id: id, owner: user });
    return res.json(results);
  } catch (error) {
    return res.json(error.message);
  }    
}

async function getByName(req, res) {
  const { name } = req.params;
  const user = req.user; 
  try {
    const results = await BLL.getByName({ name: name });
    return res.json(results);
  } catch (error) {
    return res.json(error.message);
  }
}

async function getByOwner(req, res) {
  const user = req.user;
  try {
    const results = await BLL.getByOwner({ owner: user });
    return res.json(results);
  } catch (error) {
    return res.json(error.message);
  }
}

async function getAll(req, res) {
  try {
    const results = await BLL.getAll();
    return res.json(results);
  } catch (error) {
    return res.json(error.message);
  }
}

async function create(req, res) {
  const create = req.body;
  const user = req.user;
  try {
    const results = await BLL.create({ create: create, owner: user });
    return res.json(results);
  } catch (error) {
    return res.json(error.message);
  }
}

async function updateById(req, res) {
  const { id } = req.params;
  const update = req.body;
  const user = req.user;
  try {
    const results = await BLL.updateById({ _id: id, update: update, owner: user });
    return res.json(results);
  } catch (error) {
    return res.json(error.message);
  }
}

async function updateByName(req, res) {
  const { name } = req.params;
  const update = req.body;
  const user = req.user;
  try {
    const results = await BLL.createCharacter({ name: name, update: update, owner: user });
    return res.json(results);
  } catch (error) {
    return res.json(error.message);
  }
}

async function deleteById(req, res) {
  const { id } = req.params;
  const user = req.user;
  try {
    const results = await BLL.deleteById({ _id: id, owner: user });
    return res.json(results);
  } catch (error) {
    return res.json(error.message);
  }
}

async function deleteByName(req, res) {
  const { name } = req.params;
  const user = req.user;
  try {
    const results = await BLL.deleteByName({ name: name, owner: user });
    return res.json(results);
  } catch (error) {
    return res.json(error.message);
  }
}

export { getById, getByName, getByOwner, getAll, create, updateById, updateByName, deleteById, deleteByName }