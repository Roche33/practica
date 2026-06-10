const carrito = [
  { producto: "Laptop", precio: 1000 },
  { producto: "Mouse", precio: 50 },
  { producto: "Teclado", precio: 100 }
];

const total = carrito.reduce (
    (acumulador, item) => acumulador + item.precio,
    0
);
// console.log(total);

const frutas = [
  "manzana",
  "pera",
  "manzana",
  "naranja",
  "manzana"
];

const ocurrencia = frutas.reduce(
    (sum,palabra)=> {
        sum[palabra] = (sum[palabra] || 0) + 1;
        return sum;
    },{}
);
// console.log(ocurrencia)

const compras = [
  { producto: "Laptop", precio: 1000 },
  { producto: "Mouse", precio: 50 },
  { producto: "Monitor", precio: 300 },
  { producto: "Cable", precio: 20 }
];

const tot = compras.filter(
    numero => numero.precio > 100
    
)
const suma = tot.reduce(
    (sum,item) => sum + item.precio,
    0
)
const nuevo = compras
    .filter(item => item.precio>100)
    .map(item => item.producto)
console.log(nuevo);