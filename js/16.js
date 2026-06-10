//Array Methods
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10,20,30]

//Filter
const resultado0 = tecnologias.filter(tech=>tech!=='React')

//Comprobar si un elemento existe en el array
const resultado1 = tecnologias.includes('HTML')

//Some - Devuelve si al menos uno cumple la condicion
const resultado2 = numeros.some(numero=> numero > 15)

//Find - Devuelve el primer elemento que cumpla la condicion
const resultado3 = numeros.find(numero => numero > 15)

//Every - Retorna true o false si todos cumplen la condicion
const resultado4 = numeros.every(numero=> numero > 9)

//Reduce - Acumulado en el total
const resultado5 = numeros.reduce((total, numero) => numero + total, 0)

//Filter -  Crea un nuevo array en base a una condicion
const resultado6 = tecnologias.filter(tech=> tech !== 'Node.js')

//Map - recorre todo el array y crea un nuevo array
const resultado7 = tecnologias.map(tech=>tech)

//Foreach -  itera sobre todos los elementos
tecnologias.forEach(tech=> console.log(tech))

console.log("Filter")
console.table(resultado0)
console.log("Includes")
console.table(resultado1)
console.log("Some")
console.table(resultado2)
console.log("Find")
console.table(resultado3)
console.log("Every")
console.table(resultado4)
console.log("Reduce")
console.table(resultado5)
console.log("Filter")
console.table(resultado6)
console.log("Map")
console.table(resultado7)
