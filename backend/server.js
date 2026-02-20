import express from "express";
import cors from "cors";
import db from "./config/db.js";
import path from 'path';
import { fileURLToPath } from 'url';


// Route Imports
import productRoutes from "./routes/productRoutes.js";
import productsRouter from "./routes/products.js";



// Initialize express app
const app = express();

const PORT = process.env.PORT || 5000;

// __dirname fix for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));


// Root route
app.get("/", (req, res) => {
  res.send("Guard-All Backend Running");
});


// Mount Product routes
app.use("/api/products", productRoutes);
app.use("/api/products", productsRouter);


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



// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
