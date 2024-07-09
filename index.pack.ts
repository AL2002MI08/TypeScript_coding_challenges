let a = document.getElementById('first-input') as HTMLInputElement
let b = document.getElementById('second-input') as HTMLInputElement
let btn = document.getElementById('button') as HTMLInputElement
let screen = document.querySelector('.screen') 

function addNumbers(x:number ,y:number) {
   screen.innerHTML = (x + y).toString()


}
btn.addEventListener('click', ()=> addNumbers(parseInt(a.value), parseInt(b.value)))