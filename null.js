"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gree = gree;
//using null or undefined
function gree(na) {
    if (na)
        console.log(na.toUpperCase());
    else
        console.log('hola');
}
gree(undefined);
