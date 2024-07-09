// const json = `{"latitude": 10.11, "longitude":12.12}`;

// // parse JSON to find location
// const currentLocation = JSON.parse(json);
// console.log(currentLocation.x);

// let result : any
// result = 10.25
// console.log(result.toFixed())

// function fn(a: string | number): boolean {
//     if (typeof a === "string") {
//       return true;
//     } else if (typeof a === "number") {
//       return false;
//     }
//     // throw new Error('Never!');
//   }
function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
// add('hi', false)
const obj: {
    userName: string,
    age: number

} = { userName: 'Leila', age: 24}


