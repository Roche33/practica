// Template Strings

const producto = "Tablet de 12 pulgadas"
const precio = 400
const marca = "Orange"

function textoDeFuncion(){
    return "Este texto proviene de la funcion"
}

console.log(producto + " $" + precio + " Dolares, marca: " + marca)

console.log(`${producto} $${precio} Dolares, marca: ${marca}, ${textoDeFuncion()}`)