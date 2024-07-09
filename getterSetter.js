var Persone = /** @class */ (function () {
    function Persone() {
    }
    Object.defineProperty(Persone.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 200) {
                throw new Error('The age is invalid');
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persone.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persone.prototype, "firstName", {
        set: function (theFirstName) {
            if (!theFirstName) {
                throw new Error('Invalid first name.');
            }
            this._firstname = theFirstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persone.prototype, "lastName", {
        get: function () {
            return this._lastname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persone.prototype, "lastname", {
        set: function (theLastName) {
            if (!theLastName) {
                throw new Error('Invalid last name.');
            }
            this._lastname = theLastName;
        },
        enumerable: false,
        configurable: true
    });
    Persone.prototype.getFullName = function () {
        return "".concat(this.firstname, " ").concat(this.lastname);
    };
    return Persone;
}());
var fullName = new Persone('Joe', 'Kay');
fullName.age = 20;
console.log(fullName.getFullName());
