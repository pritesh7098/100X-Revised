const express = require("express");

const app = express();

const userRoutes = require("./Routes/userRouter")
const errorMidlleware = require("./Middlewares/errorMiddleware")


app.use(express.json()); // json mw

// global logging middleware

app.use((req, res, next) => {
  console.log(`Method:${req.method} path : ${req.path}`);
  next();
});

// routes

app.use("/users", userRoutes);

// global/centralized error handler

app.use(errorMidlleware);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
