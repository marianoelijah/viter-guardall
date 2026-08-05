import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../config/db.js'; // <--- Import your MySQL pool instance here

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }
  else if (typeof username !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: 'Username and password must be strings.' });
  }

  try {
    // ⚠️ Change req.db.execute to db.execute (using the imported pool)
    const [rows] = await db.execute(
      'SELECT * FROM admins WHERE username = ?', 
      [username]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    const admin = rows[0];
    const isMatch = await bcrypt.compare(password, admin.password_hash);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.json({
      message: 'Login successful!',
      token,
      admin: { id: admin.id, username: admin.username }
    });

  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

export default router;