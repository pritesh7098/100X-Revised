console.log("HI");

import { PrismaClient } from "@prisma/client";
import { idText } from "typescript";

const client = new PrismaClient();

// You can do any crud operation here like inserting, updating
//delting etc and it will convert to SQL query eventually and fill the db.

async function createUser() {
  await client.user.create({
    data: {
      username: "Pritesh",
      password: "12345679",
      age: 24,
      city: "pune",
    },
  });
}

createUser();

async function updateUser() {
  await client.user.update({
    where: {
      id: 1,
    },

    data: {
      password: "12345",
    },
  });
}

updateUser();


// relationships - one to many - one user has many todo's so print it. 

async function getUserData() {
  const user = await client.user.findFirst({
    where: {
      id: 1,
    },

    include: {
      todos: true,
    },
  });

  console.log(user);
  

}
getUserData();
