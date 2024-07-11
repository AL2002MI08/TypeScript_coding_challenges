"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumDigits = sumDigits;
function sumDigits(n) {
    var num = Math.abs(n);
    var solution = num.toString().split('');
    return solution.map(function (e) { return parseInt(e); }).reduce(function (acc, val) { return acc + val; }, 0);
}
console.log(sumDigits(-32));
