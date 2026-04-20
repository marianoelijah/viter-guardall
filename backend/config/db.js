import mysql from "mysql2/promise"; // Notice the /promise here
import dotenv from "dotenv";

dotenv.config();

// Create the connection using the promise-based library
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Optional: A quick console log to confirm it's ready
console.log("✅ MySQL Connected (Promise-based)");

export default db;