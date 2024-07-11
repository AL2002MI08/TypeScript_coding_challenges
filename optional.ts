//how to use optional property access operator ?.
type Customer = {
    bd: Date
    month?: string
}
function getCustomer(id: number): Customer | null {
    return id === 0 ? null :  {bd: new Date()}
}
let client = getCustomer(0)
// console.log(client?.bd)

console.log(client?.month)
//optional element access operator for when dealing with arrays
//customer?.[]
//optional call
let log :any  = null;
//log woorks only if it references to an actual function
log?.('a')

