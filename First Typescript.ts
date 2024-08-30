class Person{
private firstName: string;
private lastName: string;

constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
}

getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
}
}

const person1 = new Person("Anurag","Sinha");
const person2 = new Person("Anurag","Sharma");

console.log(person1.getFullName());
console.log(person2.getFullName());
