const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter(numero => numero % 2 === 0);

// console.log(pares);

const usuarios = [
  { nombre: "Ana", activo: true },
  { nombre: "Juan", activo: false },
  { nombre: "Pedro", activo: true }
];

const activos = usuarios.filter(usuario => usuario.activo);
// console.log(activos);

const num = [5, 12, 8, 20, 3, 15];
const mayores = num.filter(mayor => mayor > 10)
// console.log(mayores);

const productos = [
  { nombre: "Laptop", stock: 5 },
  { nombre: "Mouse", stock: 0 },
  { nombre: "Teclado", stock: 8 }
];

const stock = productos.filter(p => p.stock > 0)
console.log(stock);