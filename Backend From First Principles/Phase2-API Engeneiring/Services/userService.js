let users = [
  { id: 1, name: "Pritesh" },
  { id: 2, name: "Rahul" }
];

exports.fetchUsers = () => {
  return users;
};

exports.fetchUserById = (id) => {
  return users.find(u => u.id === Number(id));
};

exports.addUser = (data) => {

  const newUser = {
    id: users.length + 1,
    name: data.name
  };

  users.push(newUser);

  return newUser;
};