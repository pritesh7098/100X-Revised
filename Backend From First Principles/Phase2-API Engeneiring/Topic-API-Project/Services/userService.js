let users = [];

const getAllUsers = () => users;

const getUserById = (id) => {
  return users.find(u => u.id === Number(id));
};

const createUser = (data) => {
  const newUser = {
    id: users.length + 1,
    ...data
  };

  users.push(newUser);

  return newUser;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser
};