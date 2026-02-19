import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // change if your MySQL has password
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
