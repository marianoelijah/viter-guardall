import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

export const db = await mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "guard-all_db",
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "guard-all_db",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ MySQL Connected");
  }
});

export default db;
