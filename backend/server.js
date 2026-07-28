import express from "express";
import 'dotenv/config'; // Loads environment variables from .env file into process.env
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
app.use(express.json());

// Dynamic CORS Configuration
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://guardall.vercel.app",
  "https://viter-guardall.vercel.app",
  "https://viter-guardall.onrender.com",
];

app.use(
  cors({
    origin(origin, callback) {
      // Allow requests from Postman, curl, etc.
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS blocked: ${origin}`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


// --- Static Asset Serving ---
// Original code in handling static assets for production
// Bulletproof absolute path routing for Render environments
const staticAssetsPath = path.resolve(__dirname, '../public/assets');
app.use('/assets', express.static(staticAssetsPath));
console.log("Production Static Path Configured To:", staticAssetsPath);


// --- Static Asset Serving (Multi-Folder Strategy) ---
// This is the updated approach to ensure that static assets are served correctly from multiple potential locations, 
// especially in production environments like Render or Vercel. It first checks the primary public folder and then falls back to the dist folder if necessary.
// 1. Primary path (e.g., public assets)
const publicAssetsPath = path.resolve(__dirname, '../public/assets');
app.use('/assets', express.static(publicAssetsPath));

// 2. Fallback path (e.g., dist assets)
const distAssetsPath = path.resolve(__dirname, '../dist/assets');
app.use('/assets', express.static(distAssetsPath));

console.log("🚀 Static Paths Configured Successfully:");
console.log("   -> Primary:", publicAssetsPath);
console.log("   -> Fallback:", distAssetsPath);


// --- Mount Imported Router Files ---
app.use("/api/products-legacy", productRoutes);
app.use("/api/products-main", productsRouter);

// --- Primary API Routes ---

// 1. Root Health Check (Crucial for Render deployment logs)
app.get('/', (req, res) => res.status(200).send("Guard-All Backend API is fully operational."));
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
    const [rows] = await db.query("SELECT * FROM home_cta WHERE section_name = 'secure_life' LIMIT 1");
    res.json(rows[0]); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

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

// GET products by brand
app.get('/api/products/brand/:brand', async (req, res) => {
  try {
    const { brand } = req.params;
    const [rows] = await db.query(
      'SELECT * FROM brand_products WHERE LOWER(brand_name) = LOWER(?) ORDER BY id ASC',
      [brand]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}); 

// PRODUCTPAGE.JSX - GET Categories with Nested Brands 
app.get('/api/products', async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        c.id AS cat_id, c.title, c.description, c.img_path,
        b.id AS brand_id, b.name AS brand_name, b.logo_path, b.link_path
      FROM categories_array c
      LEFT JOIN client_brands b ON c.id = b.category_id
      ORDER BY c.id ASC, b.display_order ASC
    `);

    const formattedData = rows.reduce((acc, row) => {
      let category = acc.find(item => item.id === row.cat_id);
      if (!category) {
        category = {
          id: row.cat_id,
          title: row.title,
          description: row.description,
          img: row.img_path,
          brands: [] 
        };
        acc.push(category);
      }

      if (row.brand_id) {
        category.brands.push({
          name: row.brand_name,
          logo: row.logo_path,
          path: row.link_path
        });
      }
      return acc;
    }, []);

    res.json(formattedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error fetching products" });
  }
});

// GET Our Clients
app.get('/api/clients', async (req, res) => {
    try {
        const query = "SELECT * FROM our_clients ORDER BY sector ASC";
        const [rows] = await db.query(query); 
        res.json(rows);
    } catch (err) {
        console.error("Database Error:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// GET Product Details via Route Match
app.get('/api/products/details/:brand/:slug', async (req, res) => {
    try {
        const { brand, slug } = req.params;
        const fullRoute = `/our-products/${brand}/${slug}`;
        
        const query = "SELECT * FROM brand_products WHERE detail_route = ?";
        const [rows] = await db.query(query, [fullRoute]);
        
        if (rows.length === 0) {
            return res.status(404).json({ message: "Product not found", tried: fullRoute });
        }
        res.json(rows[0]);
    } catch (err) {
        console.error("Database Error:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// SOCIAL-PLATFORMS
app.get('/api/social-platforms', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM social_platforms WHERE is_active = 1");
        res.json(rows);
    } catch (err) {
        console.error("❌ SQL ERROR:", err.message);
        res.status(500).send("Database Error");
    }
});

// SLIDESHOW HEADINGS FOR SECURITY EXPERTS 
app.get('/api/dept-intro', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM department_intros');
    res.json(rows); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// This added is for a dynamic backend testimony section
// GET Testimonials / Case Studies
app.get('/api/testimonials', async (req, res) => {
  try {
    const query = `
      SELECT 
        id, 
        name, 
        role, 
        image_url AS image, 
        quote, 
        rating, 
        project_title AS projectTitle, 
        project_description AS projectDescription, 
        project_images AS projectImages 
      FROM testimonials 
      ORDER BY id ASC
    `;
    const [rows] = await db.query(query);

    // Safely format project_images for React (Handles JSON string or array)
    const formattedRows = rows.map(item => {
      let images = [];
      if (typeof item.projectImages === 'string') {
        try {
          images = JSON.parse(item.projectImages);
        } catch {
          images = item.projectImages.split(',').map(s => s.trim());
        }
      } else if (Array.isArray(item.projectImages)) {
        images = item.projectImages;
      }

      return {
        ...item,
        projectImages: images
      };
    });

    res.json(formattedRows);
  } catch (err) {
    console.error("❌ Error fetching testimonials:", err.message);
    res.status(500).json({ error: "Database Error", message: err.message });
  }
});

// POST Contact Form Submission
// app.post('/api/contact', async (req, res) => {
//     const { name, email, subject, message } = req.body;
//     try {
//         const query = "INSERT INTO contact_inquiries (name, email, subject, message) VALUES (?, ?, ?, ?)";
//         await db.query(query, [name, email, subject, message]);
//         res.status(200).json({ message: "Inquiry received successfully." });
//     } catch (err) {
//         console.error("Contact Form Error:", err);
//         res.status(500).json({ error: "Failed to process inquiry" });
//     }
// });

// POST Contact Form Submission
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        // Pass 'new' into status column so Aiven MySQL won't reject it
        const query = "INSERT INTO contact_inquiries (name, email, subject, message, status) VALUES (?, ?, ?, ?, 'new')";
        await db.query(query, [name, email, subject, message]);
        
        res.status(200).json({ message: "Inquiry received successfully." });
    } catch (err) {
        console.error("Contact Form Error:", err);
        res.status(500).json({ error: "Failed to process inquiry" });
    }
});

// 1. GET Footer Contact Info
app.get('/api/footer-contact', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT id, type, value FROM contact_info');
    res.json(rows);
  } catch (err) {
    console.error("❌ Error fetching footer contact:", err.message);
    res.status(500).json({ error: "Database Error", message: err.message });
  }
});

// 2. GET Footer Office Addresses
app.get('/api/footer-offices', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT id, city, address, map_link FROM offices');
    res.json(rows);
  } catch (err) {
    console.error("❌ Error fetching footer offices:", err.message);
    res.status(500).json({ error: "Database Error", message: err.message });
  }
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Unhandle Error Context:", err.stack);
  res.status(500).json({ error: "Internal Server Middleware Catch!", message: err.message });
});





// --- Start Server ---
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running safely on port ${PORT}`);
});