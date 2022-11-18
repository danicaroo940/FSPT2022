import Mongoose from 'mongoose';
import mysql from 'mysql';

const MongoDB = "mongodb://127.0.0.1:27017/main";

const MySQL = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'main'
});

function connectMongoDB() {
  try {
    Mongoose.connect(MongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => console.log("Connected to MongoDB."))
  } catch (err) {
    throw "Connection to MongoDB caused an error: " + err;
  }
}

function connectMySQL() {
  MySQL.connect(function(err) {
    if (err) {
      throw "Connection to MySQL caused an error: " + err;
    }
    return console.log("Connected to MySQL.");
  });
}

export { connectMongoDB, connectMySQL, MongoDB, MySQL };
