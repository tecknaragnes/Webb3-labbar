class Password {
    #value;
    constructor(password) {
        this.#value = password;
    }
    check(input) {
        return input === this.#value;
    }
}

const myPassword = new Password("hej123");
console.log(myPassword.check("hje132"));
console.log(myPassword.check("hej123"));
// console.log(myPassword.#value); //privat fält så syns ej


class Person {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }
    get fullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }
    get initials() {
        return `${this.#firstName[0]}.${this.#lastName[0]}.`;
    }
}

const person = new Person("Agnes", "Eriksson");
console.log(person.fullName);
console.log(person.initials);


class Product {
    #name;
    #price;
    constructor(name, price) {
        this.#name = name;
        this.#price = price;
    }
    get name() {
        return `${this.#name}`;
    }
    get price() {
        return `${this.#price}`;
    }
    set price(value) {
        if (value < 0) {
            console.log("Ogiltigt pris");
            return;
        }
        this.#price = value;
    }
}

const product = new Product("Cashew nuts", 99);
console.log(product.name);
console.log(product.price);
product.price = -199;
console.log(product.price);


class Student {
    #name;
    #grades;
    constructor(name) {
        this.#name = name;
        this.#grades = [];
    }
    get name() {
        return this.#name;
    }
    addGrade(grade) {
        if (typeof grade !== "number" || grade < 0 || grade > 100) {
            console.log("Betyget måste vara ett tal mellan 0 och 100");
            return;
        }
        this.#grades.push(grade);
    }
    get average() {
        if (this.#grades.length === 0) return 0;
        let sum = 0;
        for (const grade of this.#grades) {
            sum += grade;
        }
        return sum / this.#grades.length;
    }
    get status() {
        return this.average >= 50 ? "Godkänd" : "Underkänd";
    }
}
const student = new Student("Alexander");
student.addGrade(37);
student.addGrade(86);
student.addGrade(79);
student.addGrade("D");
console.log(student.name);
console.log(student.average);
console.log(student.status);