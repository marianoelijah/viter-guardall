import express from "express";
import cors from "cors";
import db from "./config/db.js";



// Mysql Database
// config/db.js
// const db = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'guard-all_db',
//   port: 3306,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// Initializes express app
const app = express();


// Middlewares
app.use(cors());
app.use(express.json());


// Test Route 
// Root route to check if the server is running
app.get("/", (req, res) => {
  res.send("Guard-All Backend Running");
});


// Get all products
app.get("/api/products", (req, res) => {
  const query = "SELECT * FROM products";
  db.query(query, (err, results) => {
    if (err) {
      console.error("❌ Error fetching products:", err);
      return res.status(500).json({ error: "Failed to fetch products" });
    }
    res.json(results);
  });
});



// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
