"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kgToGms = kgToGms;
function kgToGms(weight) {
    if (typeof weight === 'number') {
        return weight * 1000;
    }
    else
        return parseInt(weight) * 1000;
}
console.log(kgToGms('10'));
