class Person {
    constructor(firstName, lastname, age, email) {
        this.firstName = firstName;
        this.lastName = lastname;
        this.age = age;
        this.email = email;
    }
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}
let person = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
console.log(person.toString());
