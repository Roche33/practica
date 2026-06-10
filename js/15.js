//Arrow fuctions & Array methods

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

//Eliminar
const nuevoArray = tecnologias.filter(tech=>tech!=='HTML') //Hace un return

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
console.table(tecnologias)
console.log('Eliminando HTML')
console.table(nuevoArray)
console.log('Reemplazando React por SQL')
console.table(arrayReemplazo)