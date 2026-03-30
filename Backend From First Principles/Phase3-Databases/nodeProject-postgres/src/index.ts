import { Client } from "pg";

/* const pgClient = new Client("psql 'postgresql://neondb_owner:npg_YMfEB8iW7ewJ@ep-restless-moon-am7qb659-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'") */

// alternate approach

const pgClient = new Client({
  user: "neondb_owner",
  password: "npg_YMfEB8iW7ewJ",
  port: 5432,
  host: "ep-restless-moon-am7qb659-pooler.c-5.us-east-1.aws.neon.tech",
  database: "neondb",
});

async function main() {
  await pgClient.connect();
  const responese = await pgClient.query("select * from users");
  console.log(responese);
  
}

main()
