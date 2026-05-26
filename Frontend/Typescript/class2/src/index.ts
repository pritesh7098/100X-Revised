// to check even num

function isEven(num: number): boolean {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const finalResult = isEven(2);
//console.log(finalResult);

/* ======================================================== */

// interfaces

interface People {
  name: string;
  age: number;
  // greet: () => string;
}

// use the interface in object

/* let person: People = {
  name: "pritesh",
  age: 24,
  greet: () => {
    return "HI" + person.name;
  },
};

let greeting = person.greet(); */
//console.log(greeting);

// you can create a class whuch implements the interfcae that you have created

class Manager implements People {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let user = new Manager("Don", 30);
//console.log(user);

/* Some practice  */

interface Admin {
  name: string;
  permisions: string;
}

interface User {
  name: string;
  age: number;
}

type userOrAdmin = Admin | User; // OR operator

function greeting2(user: userOrAdmin) {
  // console.log("hello", +user.name);
}

// Arrays in TS

interface Address {
  city: string;
  pincode: number;
}

interface User {
  name: string;
  age: number;
  addresses: Address[];
}

// now this use has multiple addreses

let myUser1: User = {
  name: "pritesh",
  age: 24,
  addresses: [
    {
      city: "pune",
      pincode: 123,
    },
    {
      city: "PCMC",
      pincode: 1234,
    },
  ],
};

/* Doubts and Q & A  */