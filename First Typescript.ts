/*Installation Steps
Open Powershell as Admin
check node.js ver. by "node -v"
type command "Set-ExecutionPolicy ExecutionPolicy RemoteSigned"
Select "Y"
now type "npm install -g typescript" on VS Code terminal
now run "tsc fileName.ts" 
new file with .js will appear in the folder
open that file
run "node fileName.js" 
Output will be shown in the terminal now */


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
