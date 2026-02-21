import express from "express";
import { getAllProducts, getProductById, getProductsByBrand } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts); // GET /api/products
router.get("/:id", getProductById); // GET /api/products/:id
router.get("/brand/:brandId", getProductsByBrand); // GET /api/products/brand/:brandId

export default router;