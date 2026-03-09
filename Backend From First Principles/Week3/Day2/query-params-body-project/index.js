const express = require("express");

const app = express();

app.use(express.json());

const users = [
  {
    id: 1,
    Name: "pritesh",
    role: "admin",
  },
  {
    id: 2,
    Name: "Rahul",
    role: "user",
  },
];

// 1) Req.query

 app.get("/", (req, res) => {
  res.send("Server working");
});

/*app.get("/users", (req, res) => {
  const { role } = req.query;

  let result = users;

  if (role) {
    result = users.filter((u) => u.role === role);
  }

  res.json(result);
});
 */

// 2) Req.params

 app.get("/users/:id", (req, res) => {
  let userId = Number(req.params.id);

  let user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }

  res.json(user);
}); 

// 3) Req.body

app.post("/users", (req, res) => {
  const { name, role } = req.body;

  if (!name || !role) {
    return res.status(404).json({
      message: "name and role are the required field",
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    role,
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
