import mysql from "mysql2/promise"; // Notice the /promise here
import dotenv from "dotenv";

dotenv.config();

// Create the connection using the promise-based library
const db = await mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "guard_db",
});

// Optional: A quick console log to confirm it's ready
console.log("✅ MySQL Connected (Promise-based)");

export default db;