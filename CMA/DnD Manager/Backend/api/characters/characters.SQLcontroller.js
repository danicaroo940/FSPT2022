import * as BLL from './characters.bll.js';

async function getById(req, res) {
  const { id } = req.params;
  try {
    const results = await BLL.getById({ id: id });
    return res.json(results);
  } catch (error) {
    return res.json(error.message);
  }    
}

async function getByName(req, res) {
  const { name } = req.params;
  try {
    const results = await BLL.getByName({ name: name });
    return res.json(results);
  } catch (error) {
    return res.json(error.message);
  }
}

async function getByClass(req, res) {
  const { class:charClass } = req.params;
  try {
    const results = await BLL.getByClass({ class: charClass });
    return res.json(results);
  } catch (error) {
    return res.json(error.message);
  }
}

async function getCharactersOfUser(req, res) {
  const user = req.user;
  try {
    const results = await BLL.getCharactersOfUser({ owner: user });
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

async function createCharacter(req, res) {
  const { name, gender, race, class:charClass } = req.body;
  const user = req.user;
  try {
    const results = await BLL.createCharacter({ name: name, gender: gender, race: race, class: charClass, owner: user });
    return res.json(results);
  } catch (error) {
    return res.json(error.message);
  }
}

async function deleteById(req, res) {
  const { id } = req.params;
  try {
    const results = await BLL.deleteById({ id: id });
    return res.json(results);
  } catch (error) {
    return res.json(error.message);
  }
}

async function deleteByName(req, res) {
  const { name } = req.params;
  try {
    const results = await BLL.deleteByName({ name: name });
    return res.json(results);
  } catch (error) {
    return res.json(error.message);
  }
}

export { getById, getByName, getByClass, getCharactersOfUser, getAll, createCharacter, deleteById, deleteByName }