const { success } = require("zod");
const userSchema = require("../validators/userValidator");

const validateUser = (req, res, next) => {
  const result = userSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      success: false,
      error: result.error.errors,
    });
  }

  next();
};

module.exports = validateUser;
