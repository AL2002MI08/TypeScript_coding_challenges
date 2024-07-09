class Profile {
    protected ssn: string;
    protected firstName: string;
    public lastName: string;
  
    constructor(ssn: string, firstName: string, lastName: string) {
      this.ssn = ssn;
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  class User extends Profile {
    constructor(ssn: string, firstName: string) {
      super(ssn, firstName, '');
    }
  
    getFirstName(): string {
      return `Hello my name is ${this.firstName}`;
    }
  }
  
  let person = new User('12-20-22', 'John');
//   console.log(person.firstName); // Output: John
  