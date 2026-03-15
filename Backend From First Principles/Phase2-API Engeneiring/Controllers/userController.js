const {
  fetchUsers,
  fetchUserById,
  addUser
} = require("../Services/userService.js");

exports.getUsers = (req, res) => {

  const users = fetchUsers();

  res.status(200).json(users);
};

exports.getUserById = (req, res) => {

  const user = fetchUserById(req.params.id);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.json(user);
};

exports.createUser = (req, res) => {

  const user = addUser(req.body);

  res.status(201).json(user);
};