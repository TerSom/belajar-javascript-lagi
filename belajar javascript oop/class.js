class Person {
  constructor(name) {
    this.name = name;
    console.log(`${this.name}`);
  }

  sayHello(name) {
    console.log(`Hi ${name} my name is ${this.name}`);
  }
}

const fiki = new Person("fikibol");
fiki.sayHello("eko");
const orang = new Person("orang");
orang.sayHello("eko");
