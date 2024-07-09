function getName(person) {
    return "My name is ".concat(person.first, " ").concat(person.second);
}
var j = {
    first: 'Geo',
    second: 'Willy',
    age: 40
};
console.log(getName(j));
// let format: StringFormat
// format = function (sr: string, upper: boolean) {
//     return upper ? sr.toLocaleUpperCase() : sr.toLocaleLowerCase();
// };
// console.log(format('hi', true));
var lowerCase;
lowerCase = function (s) {
    return s.toLowerCase();
};
console.log(lowerCase('HI', false));

