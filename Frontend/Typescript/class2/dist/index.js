"use strict";
// to check even num
Object.defineProperty(exports, "__esModule", { value: true });
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const finalResult = isEven(2);
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
class Manager {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let user = new Manager("Don", 30);
console.log(user);
//# sourceMappingURL=index.js.map