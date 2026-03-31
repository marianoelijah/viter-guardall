import './loadEnv.js'; // Load .env first
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';


// Setup for ES Modules (__dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Log environment variable (optional)
// console.log("API KEY from env:", process.env.OPENAI_API_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend (React at localhost:5000)

app.use(cors({ origin: `${import.meta.env.VITE_API_URL}` || 'http://localhost:5000' }));

// Parse incoming JSON bodies
app.use(bodyParser.json());

// ✅ Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Routes

// Start the server
app.listen(PORT, () => console.log(`Guard-All backend running on port ${PORT}`));