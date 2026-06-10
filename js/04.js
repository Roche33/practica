//Objetos

//const nombre = "Tablet"
//const precio = 300
//const disponible = true

const producto = {  //Objeto
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

console.log(producto)

//Para acceder a las propiedades del objeto
console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

// Destrcuturing (para extraer variables)
const { imagen } = producto //Se genera la variable aunque no exista
console.log(imagen)

const { nombre, precio, disponible } = producto
console.log(nombre) //se genera variable
console.log(precio) //se genera variable
console.log(disponible) //se genera variable

// Object Literal Enhacement (Para generar objeto con variables existentes)
const autentificado = true
const usuario = "Luis"

const nuevoObjeto = {
    autentificado : autentificado,
    usuario
}
