import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from your existing .env file
dotenv.config({ path: join(__dirname, '.env') });

async function runMigration() {
  console.log("⏳ Connecting to database cluster...");
  
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });

  try {
    console.log("🚀 Creating 'contact_info' table...");
    await connection.query(`
      CREATE TABLE IF NOT EXISTS contact_info (
        id INT AUTO_INCREMENT PRIMARY KEY,
        type VARCHAR(20) NOT NULL,
        value VARCHAR(255) NOT NULL
      );
    `);

    console.log("🌱 Seeding 'contact_info' records...");
    await connection.query(`
      INSERT INTO contact_info (type, value) VALUES
      ('phone', '(02) 8817 4132'),
      ('phone', '(02) 8840 5673 to 76'),
      ('phone', '(+63) 998 843 9711'),
      ('email', 'info@guardall.com.ph');
    `);

    console.log("🚀 Creating 'offices' table...");
    await connection.query(`
      CREATE TABLE IF NOT EXISTS offices (
        id INT AUTO_INCREMENT PRIMARY KEY,
        city VARCHAR(50) NOT NULL,
        address TEXT NOT NULL,
        map_link TEXT NOT NULL
      );
    `);

    console.log("🌱 Seeding 'offices' records...");
    await connection.query(`
      INSERT INTO offices (city, address, map_link) VALUES
      ('Makati', 'Unit 708 Cattleya Building, 235 Salcedo St. Legaspi Village, Makati City, Philippines 1223', 'https://maps.google.com'),
      ('Cebu', 'Unit 306 Cebu Holdings Building, Cebu Business Park, Cebu City, Philippines 6000', 'https://maps.google.com');
    `);

    console.log("🎉 Success! Cloud database tables created and seeded successfully.");
  } catch (error) {
    console.error("❌ Migration failed:", error.message);
  } finally {
    await connection.end();
  }
}

runMigration();