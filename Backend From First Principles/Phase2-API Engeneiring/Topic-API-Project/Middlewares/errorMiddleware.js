const { success } = require("zod");

const errorMiddlware = (err, req, res, next) => {
  console.error(err.message);

  res.status(500).json({
    success: "false",
    error: err.message || "Internal server Error",
  });

  next();
};

module.exports = errorMiddlware;
