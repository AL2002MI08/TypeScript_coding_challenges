"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.getCount = function (str) {
        var vowels = 'aeiou';
        return str.split('').filter(function (e) { return vowels.includes(e); }).length;
    };
    return Kata;
}());
exports.Kata = Kata;
