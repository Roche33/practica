// Iteradores en JS
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

//foreach --Accede a cada elemento del array
tecnologias.forEach(function(tech){
    console.log(tech)
})

//Crea un nuevo array
const arrayMap = tecnologias.map( function(tech){
    return tech;
})

console.log('Imprimiendo Map')
console.table(arrayMap)

