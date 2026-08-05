import jwt from 'jsonwebtoken';

export const verifyAdminToken = (req, res, next) => {
  // Extract token from 'Authorization: Bearer <token>' header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded; // Attach decoded token payload (admin id, username) to request
    next(); // Proceed to the actual route handler
  } catch (error) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};