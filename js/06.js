// Objetos - Desctructuring con 2 o mas objetos

const producto = {  //Objeto
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {  //Objeto
    nombre: "Juan",
    premium : true
}


const {nombre, precio, disponible} = producto
//const {nombre, premium} = cliente //Error
const {nombre:nombreCliente, premium} = cliente //Se genera un alias

console.log(nombre)
console.log(nombreCliente)