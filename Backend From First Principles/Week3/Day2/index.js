const express = require("express");

const app = express();

/* Defining global middleware */

app.use((req, res, next) => {
  console.log("Midlleware 1 : Req reccived");
  console.log("Method name : ", req.method);
  console.log("url : ", req.url);
  //next();
});

/* Route handler */

app.get("/", (req, res) => {
  res.send("Hello from the express with middleware");
});

/* Starting the server */

app.listen(3000, () => {
  console.log("Server is running on port : 3000");
});
