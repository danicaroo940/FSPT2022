import mysql from 'mysql';
import { queryMySQL } from '../database/charactersMySQL.js';

function getCharactersOfUser(req, res) {
  const query = `SELECT * FROM characters WHERE username = ` + mysql.escape(req.username);
  queryMySQL(query, (results) => {
    if (results.length === 0) {return errResponse(res, 200, "Nothing found.")}
    else {return res.json(results)}
  });    
}

function getAll(req, res) {
  const query = `SELECT * FROM characters`;
  queryMySQL(query, (results) => {
    if (results.length === 0) {return errResponse(res, 200, "Nothing found.")}
    else {return res.json(results)}
  });    
}

function getById(req, res) {
  const { id } = req.params;
  const query = `SELECT * FROM characters WHERE id = ` + mysql.escape(id);
  queryMySQL(query, (results) => {
    if (results.length === 0) {return errResponse(res, 200, "Nothing found.")}
    else {return res.json(results)}
  });    
}

function getByName(req, res) {
  const { name } = req.params;
  const query = `SELECT * FROM characters WHERE name = ` + mysql.escape(name);
  queryMySQL(query, (results) => {
    if (results.length === 0) {return errResponse(res, 200, "Nothing found.")}
    else {return res.json(results)}
  });    
}

function getByClass(req, res) {
  const { class:charClass } = req.params;
  const query = `SELECT * FROM characters WHERE class = ` + mysql.escape(charClass);
  queryMySQL(query, (results) => {
    if (results.length === 0) {return errResponse(res, 200, "Nothing found.")}
    else {return res.json(results)}
  });    
}

function createCharacter(req, res) {
  const { charName:name, charGender:gender, charClass:charClass } = req.body;
  const query = `INSERT INTO characters (name, gender, class) values(${mysql.escape(name)}, ${mysql.escape(gender)}, ${mysql.escape(charClass)})`;
  queryMySQL(query, (results) => res.json(results));
}

function deleteById(req, res) {
  const { id } = req.params;
  const query = `DELETE FROM characters WHERE id = ` + mysql.escape(id);
  queryMySQL(query, (results) => res.json(results));
}

function deleteByName(req, res) {
  const { name } = req.params;
  const query = `DELETE FROM characters WHERE id = ` + mysql.escape(name);
  queryMySQL(query, (results) => res.json(results));
}

function errResponse(res, status, message) {
  res.status(status);
  res.json(message);
}

export { getCharactersOfUser, getById, getByName, getByClass, getAll, createCharacter, deleteById, deleteByName }