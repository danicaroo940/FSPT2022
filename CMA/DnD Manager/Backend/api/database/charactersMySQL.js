import { MySQL } from '../main/database.js'

// const characterTable = `
//   CREATE TABLE IF NOT EXISTS characters(
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     name VARCHAR(100) NOT NULL,
//     gender VARCHAR(100) NOT NULL,
//     level INT NOT NULL DEFAULT 1,
//     class VARCHAR(100) NOT NULL
//   );`;

// async function getTable() {
//   MySQL.query(characterTable, (err, res) => {
//     if (err) {return console.error("Query to MySQL error: " + err.message)}
//   });
// }

async function queryMySQL(query, callback) {
  MySQL.query(query, (err, res) => {
    if (err) {throw ("Query to MySQL error: " + err.message)}
    return callback(res);
  })
}

export { queryMySQL };
