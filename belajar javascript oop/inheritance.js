class Employee {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    console.log(`Hello ${name} my name is employee ${this.name}`);
  }
}

class Manager extends Employee {
    sayHello(){
      super.sayHello()
    }
}


const fiki = new Employee("fiki");
fiki.sayHello("eko");

const umay = new Manager("umay");
umay.sayHello("eko");

console.info(fiki);
console.info(umay);
