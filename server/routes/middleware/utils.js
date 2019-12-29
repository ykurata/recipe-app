const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try{
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decoded.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      req.user = userId;
      next();
    }
  } catch {
    res.status(401).json({
      error: "Invalid request"
    });
  }
};