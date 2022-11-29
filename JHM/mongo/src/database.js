import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config();

const dbName = process.env.MONGO_DB_NAME;
const url = process.env.MONGO_URL;
const client = new MongoClient(url);
const db = client.db(dbName);

export { db }

// https://www.w3schools.com/nodejs/nodejs_mysql.asp
