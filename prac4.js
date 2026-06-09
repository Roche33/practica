const cart = [
  { name: 'SketchUp Pro',  price: 299, qty: 1 },
  { name: 'Texture pack',  price: 49,  qty: 3 },
  { name: 'Plugin bundle', price: 79,  qty: 2 },
];

// Tu solución:
function getTotal(cart) {
    let total = 0;
    
    for(let x = 0; x < cart.length; x++){
        total += (cart[x].price * cart[x].qty);
        
    }
    return total;
}
console.log(getTotal(cart))
// Esperado: 604