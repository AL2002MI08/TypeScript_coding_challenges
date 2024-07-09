function getProduct(id) {
    return {
        id: id,
        name: "Awesome Gadget ".concat(id),
        price: 99.5
    };
}
function addNumbers(a, b) {
    // if (typeof a == 'number' && typeof b == 'number') return a + b
    return a + b;
}
console.log(addNumbers(1, 3));
var product = getProduct(1);
//   console.log(`The product ${product.Name} costs ${product.price}`)
var showProduct = function (name, price) {
    console.log("The product $".concat(name, " costs $").concat(price));
};
showProduct(product.name, product.price);
