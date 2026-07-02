import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

async function fixFooter() {
  console.log("⏳ Connecting to Aiven database...");
  
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });

  try {
    console.log("🧹 Wiping duplicated data...");
    await connection.query("SET FOREIGN_KEY_CHECKS = 0;");
    await connection.query("TRUNCATE TABLE contact_info;");
    await connection.query("TRUNCATE TABLE offices;");
    await connection.query("SET FOREIGN_KEY_CHECKS = 1;");

    console.log("✍️ Inserting single, clean copy of Offices...");
    await connection.query(`
      INSERT INTO offices (city, address, map_link) VALUES 
      ('Makati', 'Unit 708 Cattleya Building, 235 Salcedo St. Legaspi Village, Makati City, Philippines 1223', 'https://maps.google.com'),
      ('Cebu', 'Unit 306 Cebu Holdings Building, Cebu Business Park, Cebu City, Philippines 6000', 'https://maps.google.com')
    `);

    console.log("✍️ Inserting single, clean copy of Contact Info...");
    await connection.query(`
      INSERT INTO contact_info (type, value) VALUES 
      ('phone', '(02) 8817 4132'),
      ('phone', '(02) 8840 5673 to 76'),
      ('phone', '(+63) 998 843 9711'),
      ('email', 'info@guardall.com.ph')
    `);

    console.log("✨ Success! Your live website footer is fixed.");
  } catch (error) {
    console.error("❌ Oops, an error occurred:", error.message);
  } finally {
    await connection.end();
  }
}

fixFooter();