function getProduct(id){
    return {
      id: id,
      name: `Awesome Gadget ${id}`,
      price: 99.5
    }
  }
  let product = getProduct(1)
  console.log(`The product ${product.Name} costs ${product.price}`)