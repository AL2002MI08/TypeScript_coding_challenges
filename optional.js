function getCustomer(id) {
    return id === 0 ? null : { bd: new Date() };
}
var client = getCustomer(0);
// console.log(client?.bd)
console.log(client === null || client === void 0 ? void 0 : client.month);
//optional element access operator for when dealing with arrays
//customer?.[]
//optional call
var log = null;
//log woorks only if it references to an actual function
log === null || log === void 0 ? void 0 : log('a');
