//Objetos - Manipulacion

const producto = {  //Objeto
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

//Reescribir un valor
producto.nombre =  "Monitor curvo"

//Si no existe, lo va a añadir
producto.imagen = "imagen.jpg"

//Para eliminar variable
delete producto.disponible
delete producto.cosa //Si no existe no marca ningun error

console.log(producto)


//Si queremos que no se pueda reescribir nunguna propiedad del objeto
Object.freeze(producto)
//Object.seal(producto) //Si queremos solo modificar pero no añadir ni modificar  
producto.nombre =  "Mouse"
console.log("Imprimiendo producto con Freeze")
console.log(producto)
