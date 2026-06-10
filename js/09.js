//Operaciones en los arreglos

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

//Añadir elementos
//tecnologias.push('Java') //Añade al final 
//tecnologias.unshift('Java') //Añade al inicio

const nuevoArreglo = [...tecnologias, 'Java'] //OK Agregar

//Eliminar
const nuevoArray = tecnologias.filter( function(tech){
    //console.log(tech)
    if(tech!=='HTML'){ 
        return true //Eliminamos HTML
    } else {
        false
    }

})

//Reemplazar
//tecnologias[0] = 'SQL' //No
const arrayReemplazo = tecnologias.map(tech=>{
    if(tech === 'React') {
        return 'SQL'
    } else {
        return tech
    }
        
})

console.log('Original')
console.table(nuevoArreglo)
console.log('Eliminando HTML')
console.table(nuevoArray)
console.log('Reemplazando React por SQL')
console.table(arrayReemplazo)