// Understanding core nodeJS Concepts

console.log("start"); // 1

setTimeout(() => {
  console.log("Hello from timeout"); //4 
}, 0);

Promise.resolve().then(() => {
  console.log("Promise is resolved"); // 3
});

console.log("END"); // 2
