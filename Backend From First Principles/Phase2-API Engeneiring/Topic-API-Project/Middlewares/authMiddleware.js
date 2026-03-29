const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({
      message: "Token missing",
    });
  }

  if (token !== "mysecrettoken") {
    return res.status(403).json({
      message: "Invalid token",
    });
  }

  next();
};

module.exports = authMiddleware;
