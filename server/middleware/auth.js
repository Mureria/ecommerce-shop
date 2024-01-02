const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Extract the token from the request header
  const token = req.header('Authorization');

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ error: 'Access denied. Token not provided' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.secret);

    // Attach the user information to the request
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;
