class Employee {
  constructor(firstname) {
    this.firstname = firstname;
  }

  sayHello(firstname) {
    console.log(`Hello ${firstname} my firstname is employee ${this.firstname}`);
  }
}

class Manager extends Employee {
  constructor(firstname, lastname) {
    super(firstname);
    this.lastname = lastname;
  }

  sayHello(firstname) {
    console.log(`hallo ${firstname} my firstname is manager ${this.firstname} ${this.lastname}`);
  }
}

const fiki = new Employee("fiki");
fiki.sayHello("eko");

const umay = new Manager("umay","somay");
umay.sayHello("eko");

console.info(fiki);
console.info(umay);
