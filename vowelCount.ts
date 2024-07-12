export class Kata {
    static getCount(str: string): number {
      let vowels = 'aeiou'
      return str.split('').filter(e => vowels.includes(e)).length
     }
      
  }