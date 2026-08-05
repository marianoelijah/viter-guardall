import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Configured to match your Aiven/MySQL connection settings
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 17452,
  ssl: { rejectUnauthorized: false } // Required for Aiven SSL
};

async function generateAdmin() {
  const username = 'admin_guardall'; // Set your desired admin username
  const rawPassword = 'YourSecurePassword123!'; // Set your desired admin password

  try {
    const connection = await mysql.createConnection(dbConfig);
    
    // Hash password with 10 salt rounds
    const hashedPassword = await bcrypt.hash(rawPassword, 10);

    const [result] = await connection.execute(
      'INSERT INTO admins (username, password_hash) VALUES (?, ?)',
      [username, hashedPassword]
    );

    console.log(`✅ Admin created successfully! ID: ${result.insertId}`);
    await connection.end();
  } catch (error) {
    console.error('❌ Error creating admin:', error.message);
  }
}

generateAdmin();