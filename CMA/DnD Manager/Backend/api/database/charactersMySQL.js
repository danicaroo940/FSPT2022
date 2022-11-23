import { MySQL } from '../main/database.js'

// const characterTable = `
//   CREATE TABLE IF NOT EXISTS characters(
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     name VARCHAR(100) NOT NULL,
//     gender VARCHAR(100) NOT NULL,
//     level INT NOT NULL DEFAULT 1,
//     class VARCHAR(100) NOT NULL,
//     username VARCHAR(100) NOT NULL DEFAULT "admin"
//   );
//   INSERT INTO characters( name, gender, class) VALUES
//   ("Jason", "Male", "Mage"),
//   ("Alaina", "Female", "Rogue"),
//   ("Thormund", "Male", "Warrior"),
//   ("Glosh'kog", "Female", "Monk"),
//   ("Zarya", "Male", "Priest"),
//   ("Campbell", "Female", "Palladin");
//   `;

async function queryMySQL(query, callback) {
  MySQL.query(query, (err, res) => {
    if (err) {throw ("Query to MySQL error: " + err.message)}
    return callback(res);
  })
}

export { queryMySQL };
