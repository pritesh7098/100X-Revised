const express = require("express");

const router = express.Router();

const {
  getUsers,
  getUser,
  createUser
} = require("../Controllers/userController");

const validateUser = require("../Middlewares/validateUser");
const authMiddleware = require("../Middlewares/authMiddleware");

// Public
router.get("/", getUsers);

// Protected
router.get("/:id", authMiddleware, getUser);

// Create user with validation
router.post("/", validateUser, createUser);

module.exports = router;