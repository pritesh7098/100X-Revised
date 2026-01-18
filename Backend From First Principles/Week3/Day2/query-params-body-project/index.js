const express = require("express");

const app = express();

app.use(express.json());

const users = [
  {
    id: 1,
    Name: "pritesh",
    role: "Admin",
  },

  {
    id: 2,
    Name: "Rahul",
    role: "user",
  },
];

/* Actual code  */

// 1) Req

app.get("./users", (req, res) => {
  const { Role } = req.query;

  const result = users;

  if (role) {
    result = users.filter((u) => u.role === role);
  }

  res.json(result);
});

app.listen(3000, () => {
  console.log("Server is running on port : 3000");
});
