// let message: string = 'Hello, World!';
// // create a new heading 1 element
// let heading = document.createElement('h1');
// heading.textContent = message;
// // add the heading the document
// document.body.appendChild(heading);
interface Product {
  id: number;
  name: string;
  price: number;
  // color:number;
}

function getProduct(id: number) : Product{
    return {
      id: id,
      name: `Awesome Gadget ${id}`,
      price: 99.5
    }
  }
  function addNumbers(a:number, b:number|string) : number | string{
    if (typeof a == 'number' && typeof b == 'number') return a + b
    return a +""+b
  }
  addNumbers(1, 3)
  let product = getProduct(1)
//   console.log(`The product ${product.Name} costs ${product.price}`)
const showProduct = (name: string, price:number) =>{
    console.log(`The product $${name} costs $${price}`)
}
showProduct(product.name, product.price)
