// let sum = function (x: number, y: number): number{
// return x + y
// }
var sum = function (x, y) { return x + y; };
var result = sum(10, 5);
var greet = function () { return console.log('hi'); };
//optional params
function add(a, b, c) {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}
console.log(add(1, 2));
// default params
// function multiply(count1: number = 4, count2: number = 5): number{
//     console.log( count1 * count2)
// }
// multiply(9)
//rest parameter
function countDigits() {
    var count = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        count[_i] = arguments[_i];
    }
    var initial = 0;
    count.forEach(function (num) { return initial += num; });
    return initial;
}
console.log(countDigits(4, 5));
console.log(countDigits(4));
console.log(countDigits());
