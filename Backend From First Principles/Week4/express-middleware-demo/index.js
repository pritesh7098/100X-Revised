// importing express
const express = require("express");

// creating express app
const app = express();

/* ---------------------------------------------------- */
/* Middleware to parse JSON body from POST requests     */
/* ---------------------------------------------------- */

app.use(express.json()); // converts JSON body into JS object (req.body)

/* ---------------------------------------------------- */
/* Global Middleware (runs for every request)           */
/* ---------------------------------------------------- */

app.use((req, res, next) => {
  console.log("---- Incoming Request ----");
  console.log("Method:", req.method); // GET / POST etc
  console.log("URL:", req.url); // route being accessed
  console.log("--------------------------");

  next(); // pass control to next middleware/route
});

/* ---------------------------------------------------- */
/* Public Routes (no authentication required)           */
/* ---------------------------------------------------- */

// Home route
app.get("/", (req, res) => {
  res.send("This is a Home route");
});

// Public route
app.get("/public", (req, res) => {
  res.send("This is a public route");
});

/* ---------------------------------------------------- */
/* Authentication Middleware                            */
/* ---------------------------------------------------- */

const authMiddleware = (req, res, next) => {
  // getting token from request header
  const token = req.headers["authorization"];

  // if token is missing
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized: token missing",
    });
  }

  // if token is invalid
  if (token !== "mysecrettoken") {
    return res.status(403).json({
      message: "Forbidden: invalid token",
    });
  }

  // if token is correct
  next();
};

/* ---------------------------------------------------- */
/* Protected Routes (require authentication)            */
/* ---------------------------------------------------- */

// Protected GET route
app.get("/dashboard", authMiddleware, (req, res) => {
  res.send("Welcome to dashboard which is a protected route");
});

// Protected POST route
app.post("/profile", authMiddleware, (req, res) => {
  // getting data from request body
  const { name1 } = req.body;

  res.json({
    message: "Profile updated successfully",
    name: name1,
  });
});

/* ---------------------------------------------------- */
/* Start Server                                         */
/* ---------------------------------------------------- */

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
