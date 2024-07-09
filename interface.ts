interface People {
    first : string,
    second: string
    age: number
}
function getName(person: People): string{
    return `My name is ${person.first} ${person.second}`
}
let j = {
    first: 'Geo',
    second: 'Willy',
    age: 40
}
console.log(getName(j))

interface StringFormat {
    (str: string, isUpper: boolean): string
}
// let format: StringFormat
// format = function (sr: string, upper: boolean) {
//     return upper ? sr.toLocaleUpperCase() : sr.toLocaleLowerCase();
// };

// console.log(format('hi', true));
let lowerCase: StringFormat
lowerCase = function(s:string): string{
return s.toLowerCase()
}
console.log(lowerCase('HI', false));
interface Greet {
    (name: string): string;
}

const greeting: Greet = (name: string) => {
    return `Hello, ${name}!`;
};
console.log(greeting('ivy'));
let car: string | null = "Alice";
car = null; // This is allowed


