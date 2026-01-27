const express = require("express");
const app = express();

app.use(express.json); // for post body

// Defining global middleware

app.use((req, res, next) => {
  console.log("----Incoming req----");
  console.log("Method:", req.method);
  console.log("URL :", req.url);
  console.log("-------------------");

  next(); // passing the control
});

// public route

app.get("/public", (req, res) => {
  res.send("This is a public route");
});

/* ---------------------------------------------- */

app.listen(3000, () => {
  console.log(`Server is listening on Port 3000`);
});
