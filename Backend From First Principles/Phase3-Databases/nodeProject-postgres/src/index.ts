// Traditional Way

/* import { Client } from "pg";

/* const pgClient = new Client("psql 'postgresql://neondb_owner:npg_YMfEB8iW7ewJ@ep-restless-moon-am7qb659-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'") /

// alternate approach 

const pgClient = new Client({
  user: "neondb_owner",
  password: "npg_YMfEB8iW7ewJ",
  port: 5432,
  host: "ep-restless-moon-am7qb659-pooler.c-5.us-east-1.aws.neon.tech",
  database: "neondb",
  ssl: true,
});


// from here you can perform crud/query db without having any console. 

async function main() {
  await pgClient.connect();
  const responese = await pgClient.query("select * from users where id=3");
  console.log(responese);
}

main();
 */

/* -------------------------------------------------- */

// With express

import express from "express";

import { Client } from "pg";

const app = express();
app.use(express.json());

// DB Connection

const pgClient = new Client({
  user: "neondb_owner",
  password: "npg_YMfEB8iW7ewJ",
  port: 5432,
  host: "ep-restless-moon-am7qb659-pooler.c-5.us-east-1.aws.neon.tech",
  database: "neondb",
  ssl: true,
});

// connecting to db

pgClient.connect();


// route 1 

app.get("/", (req, res) => {
  res.status(200).json({
    message: "You are on homepage",
  });
});

// route 2

app.post("/signup", async (req, res) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;

  // Insert Query

  const insertQuery = `INSERT INTO users 
  (userName,email,password) 
  VALUES (${userName}, ${email}, ${password})`;

  const response = await pgClient.query(insertQuery);

  res.status(201).json({
    success: true,
    message: "You have signup successfully",
  });
});

// -----------------------------------------------------

const port = 3000;

app.listen(port, () => {
  console.log("Server is running at port : 3000");
});


// -----------------------------------------------------