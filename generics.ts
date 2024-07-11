export const addUID = <T extends {name: string} >(ob: T) =>{
    let uid = Math.floor(Math.random()* 100)
    return {...ob, uid}
}
let gen = addUID({name: 'Harry', age: 20})
console.log(gen)
