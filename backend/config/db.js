import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Load environment variables immediately
dotenv.config();

// Create a connection pool instead of a single connection
const db = mysql.createPool({
  // Checks for Railway variables first; falls back to local XAMPP defaults if not found
  host: process.env.MYSQLHOST || process.env.DB_HOST || 'localhost',     
  user: process.env.MYSQLUSER || process.env.DB_USER || 'root',
  password: process.env.MYSQLPASSWORD !== undefined ? process.env.MYSQLPASSWORD : (process.env.DB_PASSWORD || ''),
  database: process.env.MYSQLDATABASE || process.env.DB_NAME,
  port: process.env.MYSQLPORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

console.log("✅ MySQL Pool Initialized");

export default db;