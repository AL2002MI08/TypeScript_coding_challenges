class Person {
    ssn: string;
    firstName: string;
    lastName: string
    constructor(ssn : string,firstName: string,lastName: string ){
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName
    }
    getName(): string{
        return `${this.firstName} ${this.lastName}`
    }
}
let myName = new Person('12-20-22', 'John','Fray')
console.log(myName.getName())