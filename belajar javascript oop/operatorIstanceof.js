class Employee {

}

class Manager extends Employee{

}

const terry = new Employee()
const umay = new Manager()

console.log(typeof terry)
console.log(typeof umay)

console.log(terry instanceof Employee)
console.log(terry instanceof Manager)

console.log(umay instanceof Manager)
console.log(umay instanceof Employee)