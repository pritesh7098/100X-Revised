// Understanding core nodeJS Concepts

// console.log("start"); // 1

// setTimeout(() => {
//   console.log("Hello from timeout"); //4
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise is resolved"); // 3
// });

// console.log("END"); // 2

/* ------------------------------------------------ */

// D4 - Wed 14th Jan'26

const fs = require("fs");
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 10; // manually determine thread size

const start = Date.now;

setTimeout(() => {
  console.log("hello from timer1");
}, 0);

setImmediate(() => {
  console.log("hello from immdediate fun 1");
});

fs.readFile("sample.txt", "utf8", () => {
  console.log("IO polling finish");

  setTimeout(() => {
    console.log("hello from timer(inside callback) 2");
  }, 0);

  setTimeout(() => {
    console.log("hello from timer(inside callback) 3");
  }, 5 * 1000);

  setImmediate(() => {
    console.log("hello from immediate 2 but inside a callback");
  });
});

console.log("top level code");

// when i cut down this then the immediate fun is executing at first than timeout. interesting right ?

// the above code is exactly run like whatever we have studied in archtecture

/* Expensive/Cpu heavy operations like crytpto
 */

crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms`, " password 1 done ");
});

crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms`, "password 2 done ");
});

crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms`, "password 3 done ");
});

crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms`, "password 4 done ");
});

crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms`, "password 5 done ");
});

crypto.pbkdf2("password", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms`, "password 6 done ");
});

// as we have 4 threads so all this 4 opn will use 4 threads

/* ------------------------------------------------------------------------------------- */
