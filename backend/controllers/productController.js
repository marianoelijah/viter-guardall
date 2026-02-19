import db from "../config/db.js";

// GET all products with their brand logos
export const getAllProducts = (req, res) => {
  const query = `
    SELECT p.id AS product_id, p.name AS product_name, p.description, p.main_image,
           b.id AS brand_id, b.name AS brand_name, b.logo AS brand_logo
    FROM products p
    LEFT JOIN product_brands pb ON p.id = pb.product_id
    LEFT JOIN brands b ON pb.brand_id = b.id
    ORDER BY p.id
  `;

  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: "Failed to fetch products" });

    // Group brands by product
    const productsMap = {};
    results.forEach(r => {
      if (!productsMap[r.product_id]) {
        productsMap[r.product_id] = {
          id: r.product_id,
          name: r.product_name,
          description: r.description,
          main_image: r.main_image,
          brands: []
        };
      }
      if (r.brand_id) {
        productsMap[r.product_id].brands.push({
          id: r.brand_id,
          name: r.brand_name,
          logo: r.brand_logo
        });
      }
    });

    res.json(Object.values(productsMap));
  });
};

// GET single product by ID with its brands
export const getProductById = (req, res) => {
  const productId = req.params.id;

  const query = `
    SELECT p.id AS product_id, p.name AS product_name, p.description, p.main_image,
           b.id AS brand_id, b.name AS brand_name, b.logo AS brand_logo
    FROM products p
    LEFT JOIN product_brands pb ON p.id = pb.product_id
    LEFT JOIN brands b ON pb.brand_id = b.id
    WHERE p.id = ?
  `;

  db.query(query, [productId], (err, results) => {
    if (err) return res.status(500).json({ error: "Failed to fetch product" });
    if (results.length === 0) return res.status(404).json({ message: "Product not found" });

    const product = {
      id: results[0].product_id,
      name: results[0].product_name,
      description: results[0].description,
      main_image: results[0].main_image,
      brands: results
        .map(r => r.brand_id ? { id: r.brand_id, name: r.brand_name, logo: r.brand_logo } : [])
        .filter(Boolean)
    };

    res.json(product);
  });
};

// GET all products by brand ID
export const getProductsByBrand = (req, res) => {
  const brandId = req.params.brandId;

  const query = `
    SELECT p.id AS product_id, p.name AS product_name, p.description, p.main_image
    FROM products p
    INNER JOIN product_brands pb ON p.id = pb.product_id
    WHERE pb.brand_id = ?
  `;

  db.query(query, [brandId], (err, results) => {
    if (err) return res.status(500).json({ error: "Failed to fetch products by brand" });
    res.json(results);
  });
};
