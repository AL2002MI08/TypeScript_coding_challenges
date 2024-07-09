export function divisors(n: number): number{
    let count: number[] = [];
   for(let i = 1; i<= n; i++){
     if(n % i == 0){
        count.push(i)
     }
   }
    return count.length
  }
