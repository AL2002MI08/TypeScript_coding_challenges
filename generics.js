"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUID = void 0;
var addUID = function (ob) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, ob), { uid: uid });
};
exports.addUID = addUID;
var gen = (0, exports.addUID)({ name: 'Harry', age: 20 });
console.log(gen);
