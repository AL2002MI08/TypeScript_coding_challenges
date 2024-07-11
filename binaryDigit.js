"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr2bin = arr2bin;
function arr2bin(arr) {
    return (arr.length === 0) ? '0' : arr.filter(function (e) { return typeof e === 'number'; }).reduce(function (acc, val) { return acc + val; }, 0).toString(2);
}
