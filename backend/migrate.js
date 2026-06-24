import fs from 'fs';
import path from 'path';
import mysql from 'mysql2/promise';
import 'dotenv/config';

async function migrate() {
  console.log("⏳ Connecting to Aiven Cloud Database using .env credentials...");
  
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 17452,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true
  });

  try {
    console.log("✅ Connected! Disabling strict primary key requirement for this session...");
    await connection.query("SET SESSION sql_require_primary_key = 0;");

    console.log("📖 Reading backup.sql file...");
    const sqlPath = path.resolve('backup.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    console.log("🚀 Injecting tables into Aiven Cloud...");
    await connection.query(sql);
    
    console.log("🎉 SUCCESS! Your local tables have been migrated to the cloud.");
  } catch (err) {
    // 💡 If the table already exists, log a warning instead of crashing the deployment process
    if (err.code === 'ER_TABLE_EXISTS_ERROR' || err.message.includes('already exists')) {
      console.log("⚠️ Tables already exist in Aiven Cloud. Skipping schema re-injection!");
    } else {
      console.error("❌ Migration failed:", err.message);
      process.exit(1); // Only crash for severe connection errors
    }
  } finally {
    await connection.end();
  }
}

migrate();