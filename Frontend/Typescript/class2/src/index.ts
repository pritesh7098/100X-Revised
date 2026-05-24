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


let user = new Manager("Don", 30)
console.log(user);

// cont from abstract classes 57.49 
