// let sum = function (x: number, y: number): number{
// return x + y
// }

let sum = (x: number, y: number) : number => x + y
let result = sum(10, 5)
let greet = (): void => console.log('hi')
//optional params
// function add(a: number, b: number, c?: number): number{
//     if(typeof c !== 'undefined'){
//        return a + b + c
//     }
//     return a + b
// }
// console.log(add(1, 2))
// default params
// function multiply(count1: number = 4, count2: number = 5): number{
//     console.log( count1 * count2)
// }
// multiply(9)
//rest parameter
function countDigits(...count: number[]): number{

   
        let initial = 0;
        count.forEach((num) => initial += num);
        return initial;
}
console.log(countDigits(4, 5));
console.log(countDigits(4));
console.log(countDigits());

function total(a: number, b: number): number;
function total(a: number, b: number, c: number): number;
function total(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}


