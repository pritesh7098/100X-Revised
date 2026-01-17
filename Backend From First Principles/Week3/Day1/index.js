setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => {
  console.log("promise");
}); 

// promise will print first as its microtask and high priority and then the timeouts will prints as its macrotask and aving lowest priority. 

// Microtask : IMP one do it ASAP. 
// MAcrotask : You can do it later on 
