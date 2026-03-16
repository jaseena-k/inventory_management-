import mysql from 'mysql2'
import dotenv from 'dotenv'


dotenv.config()
const DB_HOST = process.env.DB_HOST 
const DB_NAME = process.env.DB_NAME 
const DB_PASSWORD = process.env.DB_PASSWORD 
const DB_USER = process.env.DB_USER



const db = mysql.createConnection({
  host: DB_HOST,
  user:DB_USER,
  password: DB_PASSWORD,
  database:DB_NAME
});

db.connect((err) => {
  if (err) {
    console.log("Connection failed:", err);
  } else {
    console.log("Database connected");
  }
});

export default db;