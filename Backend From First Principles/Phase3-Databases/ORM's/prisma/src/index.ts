console.log("HI");

import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createUser() {
  await client.user.create({
    data: {
      username: "Pritesh",
      passwor: "12345679",
      age: 24,
      city: "pune",
    },
  });
}

createUser();
