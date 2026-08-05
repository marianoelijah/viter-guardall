import express from 'express';
import { verifyAdminToken } from '../middleware/authMiddleware.js';
import db from '../config/db.js'; // 1. <--- Import your MySQL pool here

const router = express.Router();

// PUBLIC ROUTE: Submit Inquiry
router.post('/', async (req, res) => {
  const { client_name, company, email, phone, interest, message } = req.body;

  if (!client_name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }

  try {
    // 2. Use db.execute instead of req.db.execute
    const [result] = await db.execute(
      `INSERT INTO inquiries (client_name, company, email, phone, interest, message)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [client_name, company || null, email, phone || null, interest || null, message]
    );

    res.status(201).json({
      message: 'Inquiry submitted successfully!',
      inquiryId: result.insertId
    });
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    res.status(500).json({ error: 'Server error saving inquiry.' });
  }
});

// PROTECTED ROUTE: Fetch all inquiries (Admin Only)
router.get('/', verifyAdminToken, async (req, res) => {
  try {
    // 3. Use db.execute instead of req.db.execute
    const [inquiries] = await db.execute(
      'SELECT * FROM inquiries ORDER BY created_at DESC'
    );
    res.json(inquiries);
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({ error: 'Server error retrieving inquiries.' });
  }
});

// PROTECTED ROUTE: Update status
router.patch('/:id/status', verifyAdminToken, async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    // 4. Use db.execute instead of req.db.execute
    const [result] = await db.execute(
      'UPDATE inquiries SET status = ? WHERE id = ?',
      [status, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Inquiry not found.' });
    }

    res.json({ message: `Inquiry status updated to ${status}.` });
  } catch (error) {
    console.error('Error updating status:', error);
    res.status(500).json({ error: 'Server error updating status.' });
  }
});

export default router;