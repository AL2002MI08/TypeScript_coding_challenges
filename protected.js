var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Profile = /** @class */ (function () {
    function Profile(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Profile.prototype.getName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Profile;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(ssn, firstName) {
        return _super.call(this, ssn, firstName, '') || this;
    }
    User.prototype.getFirstName = function () {
        return "Hello my name is ".concat(this.firstName);
    };
    return User;
}(Profile));
var person = new User('12-20-22', 'John');
console.log(person.firstName);
