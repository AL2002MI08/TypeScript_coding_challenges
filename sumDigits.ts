export function sumDigits(n: number): number {
    let num = Math.abs(n)
    let solution = num.toString().split('')
    return solution.map(e => parseInt(e)).reduce((acc, val)=> acc + val, 0)
}
console.log(sumDigits(-32))