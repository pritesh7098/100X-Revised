/* let a: number = 2;
console.log(a); */

/* ------------------ */

// Some advance typescript API's

// Pick -

/* ------------- */

// Functions in TS

function makeChai(type: string, cups: number) {
  console.log(`making a ${cups} cups of ${type} chai `);
}

makeChai("masalaChai", 2);

// logger function

function logChai(): void {
  console.log(
    "This is void fun which is never giving data outside, as it's void function",
  );
}

// function with parameter

function orderChai(type: string = "masala") {
  console.log();
}

// slightly complicated syntax

function makeCha2(order: {
  type: string;
  sugar: number;
  size: "large" | "small";
}): number {
  return 4; // in case if you are giving type to function
  //  console.log(3); // in case you are not giving type to fun
}

/* ------------------------- */

// Generics in TS

function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("string");
wrapInArray(22);
wrapInArray(true);

// another example

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("string", true);

// we can make an interface as an generics

interface Box<datatype> {
  content: datatype;
}

const numberBox: Box<number> = { content: 10 };
const stringBox: Box<string> = { content: "string" };

// Real world use case

/* ----------------------------------------------- */

// Chapter 3 : KeyOf operator in TS.

type PersonT = {
  name: string;
  age: number;
  isEmp: boolean;
};

let personData: PersonT = {
  name: "pritesh dhanad",
  age: 24,
  isEmp: true,
};

/* ------- */

// keyOf 

type PersonX = keyof PersonT; // here it will take it's keys only not values

let myPersonData: PersonX;

myPersonData = "name";
myPersonData = "age";
myPersonData = "isEmp";
myPersonData = "salary" // throws an erroe as it's not belongs to PersonT

let myAnotherPerson: keyof PersonT="name";

