export function arr2bin(arr: any[]): string {
    return (arr.length === 0) ?'0': arr.filter(e => typeof e === 'number').reduce((acc, val)=> acc + val,0).toString(2)
  }