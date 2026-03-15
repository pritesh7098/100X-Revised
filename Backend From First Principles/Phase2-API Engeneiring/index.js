/* const express = require("express");

const app = express();
app.use(express.json());

const users = [
  { id: 1, name: "Pritesh" },
  { id: 2, name: "Rahul" },
];

// route that can throw an error

app.get("/home", (req, res, next) => {
  res.status(200).json({
    message: "This is home route",
  });
});

app.get("/users/:id", (req, res, next) => {
  const userId = Number(req.params.id);

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return next(new Error("User not found"));
  }

  res.status(200).json(user);
});

// centalized error middleware

app.use((err, req, res, next) => {
  console.error("Error occurred:", err.message);

  res.status(500).json({
    success: false,
    message: err.message,
  });
});

// server

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
 */
/* -------------------------------------------------- */

// Clean express folder structure 

const express = require("express");

const userRoutes = require("./Routes/userRoutes");

const app = express();

app.use(express.json());

// routes
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});



