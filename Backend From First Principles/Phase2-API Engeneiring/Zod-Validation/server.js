const express = require("express");

const app = express();

app.use(express.json());

// zod logic

const { z } = require("zod");

const userSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  age: z.number().min(18),
});

// Route

/* app.post("/users", (req, res) => {
  // validating req

  const result = userSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: result.error,
    });
  }

  res.status(201).json({
    message: "The user is created",
  });
}); */

// best way is - making validation middleware

const validateUser = (req, res, next) => {
  const result = userSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: result.error,
    });
  }

  next();
};

// use above logic in route directly

app.post("/users", validateUser, (req, res) => {
  res.json({
    message: "user created successfully",
  });
});

// server

app.listen(3000, () => {
  console.log("server is running on port : 3000");
});
