/* const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello from Backend");
});

server.listen(3000, () => {
  console.log(`server is listening on port 3000`);
}); */

/* -------------------------------------------- */

const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {

  if (req.method === "GET" && req.url === "/") {
    res.end("This is homepage");
  } else if (req.method === "GET" && req.url === "/users") {
    res.end("This is User's Page");
  } else {
    res.statusCode = 404;
    res.end("not found 404 page");
  }
});


server.listen(3000, () => {
  console.log(`server is listening on port 3000`);
});
