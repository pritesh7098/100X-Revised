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
