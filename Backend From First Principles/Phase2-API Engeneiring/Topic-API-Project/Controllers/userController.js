const userService = require("../Services/userService")

exports.getUsers = (req, res) => {
  const users = userService.getAllUsers();

  res.status(200).json({
    success: true,
    data: users
  });
};

exports.getUser = (req, res, next) => {
  const user = userService.getUserById(req.params.id);

  if (!user) {
    return next(new Error("User not found"));
  }

  res.json(user);
};

exports.createUser = (req, res) => {
  const user = userService.createUser(req.body);

  res.status(201).json({
    success: true,
    data: user
  });
};