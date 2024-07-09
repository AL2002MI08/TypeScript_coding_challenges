class Persone {
    private _age: number;
    private _firstname: string;
    private _lastname: string;

    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public get firstname() {
        return this._firstname;
    }

    public set firstName(theFirstName: string) {
        if (!theFirstName) {
            throw new Error('Invalid first name.');
        }
        this._firstname = theFirstName;
    }

    public get lastName() {
        return this._lastname;
    }

    public set lastname(theLastName: string) {
        if (!theLastName) {
            throw new Error('Invalid last name.');
        }
        this._lastname = theLastName;
    }

    public getFullName(): string {
        return `${this.firstname} ${this.lastname}`;
    }
}
const fullName = new Persone()
fullName.age = 20
console.log(fullName.age);