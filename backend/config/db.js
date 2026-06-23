import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Load environment variables immediately
dotenv.config();

// Create a persistent connection pool
const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',     
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD !== undefined ? process.env.DB_PASSWORD : '',
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // 💡 Crucial for cloud databases: automatically drops stagnant connections
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000
});

console.log("✅ Production MySQL Pool Initialized");

export default db;