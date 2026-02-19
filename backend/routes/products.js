import express from "express";
import db from "../config/db.js";
const router = express.Router();

// GET /products
router.get("/", async (req, res) => {
  try {
    // Query to fetch products with their brands
    const [rows] = await db.query(`
      SELECT 
        p.id AS product_id,
        p.name AS product_name,
        p.description AS product_description,
        p.main_image,
        b.id AS brand_id,
        b.name AS brand_name,
        b.logo AS brand_logo
      FROM products p
      LEFT JOIN product_brands pb ON p.id = pb.product_id
      LEFT JOIN brands b ON pb.brand_id = b.id
      ORDER BY p.id;
    `);

    // Transform rows into nested JSON
    const productsMap = {};
    rows.forEach(row => {
      if (!productsMap[row.product_id]) {
        productsMap[row.product_id] = {
          id: row.product_id,
          name: row.product_name,
          description: row.product_description,
          main_image: row.main_image,
          brands: []
        };
      }

      if (row.brand_id) {
        productsMap[row.product_id].brands.push({
          id: row.brand_id,
          name: row.brand_name,
          logo: row.brand_logo
        });
      }
    });

    const products = Object.values(productsMap);
    res.json(products);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
