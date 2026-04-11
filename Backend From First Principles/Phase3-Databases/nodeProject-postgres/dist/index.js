"use strict";
// Traditional Way
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// DB Connection
const pgClient = new pg_1.Client({
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
    try {
        const { userName, email, password } = req.body;
        const query = `
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
    `;
        console.log(query);
        await pgClient.query(query, [userName, email, password]);
        res.status(201).json({
            message: "Signup successful",
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error occurred" });
    }
});
// -----------------------------------------------------
const port = 3000;
app.listen(port, () => {
    console.log("Server is running at port : 3000");
});
// -----------------------------------------------------
//# sourceMappingURL=index.js.map