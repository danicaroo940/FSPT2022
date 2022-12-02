import mysql from 'mysql';
import * as DB from '../database/database.connection.js';

function MySQLQuery(sql) {
  const connection = DB.getConnectionMySQL('main');
  return new Promise((resolve, reject) => {
      connection.query(sql, (error, result) => {
          return error ? reject(error) : resolve(result); 
      })
  })
}

async function getById(id) {
  const SQL = `SELECT * FROM characters WHERE id = ` + mysql.escape(id);
  const results = await MySQLQuery(SQL);
  if (results.length === 0) {throw new Error(`There are no characters that match the query.`)}
  return results;
}

async function getByName(name) {
  const SQL = `SELECT * FROM characters WHERE name = ` + mysql.escape(name);
  const results = await MySQLQuery(SQL);
  if (results.length === 0) {throw new Error(`There are no characters that match the query.`)}
  return results;
}

async function getByClass(charClass) {
  const SQL = `SELECT * FROM characters WHERE class = ` + mysql.escape(charClass);
  const results = await MySQLQuery(SQL);
  if (results.length === 0) {throw new Error(`There are no characters that match the query.`)}
  return results;
}


async function getCharactersOfUser(owner) {
  const SQL = `SELECT * FROM characters WHERE owner = ` + mysql.escape(owner);
  const results = await MySQLQuery(SQL);
  if (results.length === 0) {throw new Error(`There are no characters that match the query.`)}
  return results;
}

async function getAll() {
  const SQL = `SELECT * FROM characters`;
  const results = await MySQLQuery(SQL);
  if (results.length === 0) {throw new Error(`There are no characters that match the query.`)}
  return results;
}

async function createCharacter(name, gender, race, charClass, owner) {
  const SQL = `INSERT INTO characters (name, gender, race, class, owner)
  VALUES(
    ${mysql.escape(name)},
    ${mysql.escape(gender)},
    ${mysql.escape(race)},
    ${mysql.escape(charClass)},
    ${mysql.escape(owner)}
    )`;
  const results = await MySQLQuery(SQL);
  return results;
}

async function deleteById(id) {
  const SQL = `DELETE FROM characters WHERE id = ` + mysql.escape(id);
  const results = await MySQLQuery(SQL);
  if (results.length === 0) {throw new Error(`There are no characters that match the query.`)}
  return results;
}

async function deleteByName(name) {
  const SQL = `DELETE FROM characters WHERE name = ` + mysql.escape(name);
  const results = await MySQLQuery(SQL);
  if (results.length === 0) {throw new Error(`There are no characters that match the query.`)}
  return results;
}

export { getById, getByName, getByClass, getCharactersOfUser, getAll, createCharacter, deleteById, deleteByName }