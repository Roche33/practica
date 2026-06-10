//Unir 2 objetos
const producto = {  //Objeto
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {  //Objeto
    nombre: "Juan",
    premium : true
}

//const nuevoObjeto = Object.assign(producto,cliente) //NO porque modifica objeto original
//const nuevoObjeto = {...producto,...cliente} //No, aunque hace copias de los objetos y no los modifica, el atributo nombre se sobre escribe
const nuevoObjeto = { //OK
    producto:{...producto},
    cliente:{...cliente}
}

console.log(nuevoObjeto) // Al unir dos veremos que solo existe el 'nombre' del cliente 
console.log(cliente) //La informacion esta intacta
console.log(producto) //El valor de 'nombre' es ahora Juan!!!!

