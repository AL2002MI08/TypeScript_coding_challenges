export function kgToGms(weight: string | number): number{
    // narrowing down our code when u use a union type
    if(typeof weight === 'number'){
        return weight * 1000
    }else return parseInt(weight) * 1000
}
console.log(kgToGms('10'));
