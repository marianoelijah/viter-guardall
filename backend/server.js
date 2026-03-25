import express from "express";
import cors from "cors";
import db from "./config/db.js";
import path from 'path';
import { fileURLToPath } from 'url';

// Route Imports
import productRoutes from "./routes/productRoutes.js";
import productsRouter from "./routes/products.js";

const app = express();
const PORT = process.env.PORT || 5000;

// ES modules fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Middlewares ---
app.use(cors());
app.use(express.json());

// The '..' tells Node to go UP one folder level, out of 'backend' and into 'viter-guardall'
app.use('/assets', express.static(path.join(__dirname, '../public/assets')));

// Update your console log too so we can verify:
console.log("New Static Path:", path.join(__dirname, '../public/assets'));

// --- LOGGING FOR DEBUGGING ---
// Add this temporary line right after the app.use above:
// console.log("Checking Static Path:", path.resolve('public/assets'));

// --- Mount Imported Router Files ---
app.use("/api/products-legacy", productRoutes);
app.use("/api/products-main", productsRouter);

// --- Primary API Routes ---

// 1. Root & Test
app.get("/", (req, res) => res.send("Guard-All Backend Running"));
app.get('/test', (req, res) => res.send("The server is alive and talking!"));

// 2. GET Brands (For Admin Dropdown)
app.get('/api/brands', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT id, name FROM brands ORDER BY name ASC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. GET Categories with Nested Brands (For ProductPage.jsx)
app.get('/api/categories-with-brands', async (req, res) => {
  try {
    const query = `
      SELECT 
        c.id AS category_id, c.title, c.description, c.image_path,
        b.name AS brand_name, b.logo_path, b.slug AS brand_slug
      FROM categories c
      LEFT JOIN category_brands cb ON c.id = cb.category_id
      LEFT JOIN brands b ON cb.brand_id = b.id
    `;
    const [rows] = await db.query(query);

    const formattedData = rows.reduce((acc, row) => {
      let category = acc.find(item => item.title === row.title);
      if (!category) {
        category = {
          title: row.title,
          description: row.description,
          img: row.image_path,
          brands: []
        };
        acc.push(category);
      }
      if (row.brand_name) {
        category.brands.push({
          name: row.brand_name,
          logo: row.logo_path,
          path: `/products/${row.brand_slug}`
        });
      }
      return acc;
    }, []);
    res.json(formattedData);
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
});

// 4. GET Products by Brand Slug (For BrandDetails.jsx)
app.get('/api/products-by-brand/:slug', async (req, res) => {
  const { slug } = req.params;
  try {
    const query = `
      SELECT p.product_name, p.product_description, p.product_image, b.name AS brand_name
      FROM products p
      JOIN brands b ON p.brand_id = b.id
      WHERE b.slug = ?
    `;
    const [rows] = await db.query(query, [slug]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch products" });
  }
});

// 5. POST Add Product (For AdminPanel.jsx)
app.post('/api/add-product', async (req, res) => {
  const { brand_id, product_name, product_description, product_image } = req.body;
  try {
    const query = `INSERT INTO products (brand_id, product_name, product_description, product_image) VALUES (?, ?, ?, ?)`;
    await db.query(query, [brand_id, product_name, product_description, product_image]);
    res.status(201).json({ message: "Product added successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add product" });
  }
});


// GET Home Banners
app.get('/api/home-banners', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM home_banners');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET Trusted Clients
app.get('/api/trusted-clients', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM trusted_clients');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET Home Featured Products
app.get('/api/home-featured-products', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM home_featured_products ORDER BY sort_order ASC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET Home CTA Data
app.get('/api/home-cta', async (req, res) => {
  try {
    // We select the one with section_name 'secure_life'
    const [rows] = await db.query("SELECT * FROM home_cta WHERE section_name = 'secure_life' LIMIT 1");
    res.json(rows[0]); // Send just the single object
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// WHO-WE-ARE SECTIONS
// GET Who We Are content
app.get('/api/who-we-are', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM who_we_are LIMIT 1');
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET Founders List
app.get('/api/founders', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM founders ORDER BY sort_order ASC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET Founders Message
app.get('/api/founders-message', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM founders_message LIMIT 1');
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET Security Experts
app.get('/api/security-experts', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM security_experts ORDER BY sort_order ASC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET Engineering Dept Intro
app.get('/api/dept-intro', async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM department_intros WHERE dept_name = 'Engineering Department' LIMIT 1");
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// OUR PRODUCTS 
// THIS ARE THE PRODUCTS BRANDS

// GET products by brand
app.get('/api/products/brand/:brand', async (req, res) => {
  try {
    const { brand } = req.params;
    const [rows] = await db.query('SELECT * FROM brand_products WHERE brand_name = ?', [brand]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// --- Start Server --- //
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});