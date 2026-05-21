// Basic types, type infereing, etc

let x: number = 2;
// console.log(x);

/* _----------------------------_ */

// INTERFACES

// WHAT if the function get user as input which is object ?
// we can assign a types to obj to it called as interface

// boring way

function greet(user: { name: string; age: number }) {
  // console.log("hello" + user.name);
}

greet({
  name: "pritesh",
  age: 24,
});

// better way to do this interfaces

// defining the interface

interface userType {
  name: string;
  age: number;
}

// defining the object having a type of userType

let user: userType = {
  name: "pritesh",
  age: 24,
};

// implementation in a function

function greet2(user: userType) {
  //console.log("hello" + user.name);
}

greet2(user);

/* ------------------------------------------------ */

// Types in TS
// basically gives you extra things like unions and intersection to do more things

type SumInput = string | number;

function sum(a: SumInput, b: SumInput): number {
  return Number(a) + Number(b); // explicit type defination is imp here as + only deals with numeric string or number not like number|string and number|string as it will get confused. 
}

const finalAns = sum("2", "4"); // works for both now
console.log(finalAns);

// intersection

type employee = {
  name: string;
  age: number;
  address: string;
};

type manager = {
  name: string;
  age: number;
  address: string;
  salary: number;
};

type TeamLead = manager & employee;

const teamLead: TeamLead = {
  name: "pritesh",
  age: 24,
  address: "pune",
  salary: 22000,
}; // getting properties og both employee and manager now
