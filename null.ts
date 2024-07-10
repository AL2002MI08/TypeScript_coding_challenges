//using null or undefined
export function gree(na: string | undefined){
    if(na) console.log(na.toUpperCase())
        else  console.log('hola')
}
gree(undefined)