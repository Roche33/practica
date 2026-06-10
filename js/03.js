//Tipos de datos

//undefined
let cliente
console.log("Ejemplo undefined")
console.log(cliente)
console.log(typeof cliente)

//Boolean
const descuento = true //false
console.log("Ejemplo Boolean")
console.log(descuento)
console.log(typeof descuento)

//Number
const numero1 = 20.20
const numero2 = 30
const numero3 = 100
console.log("Ejemplo Number")
console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

//Strings
const alumno = "Luis" //puede ser con comillas dobles
let producto = 'TV' //O puede ser con comillas simples

const numeroString = "30" 
const numeroNumber = 30
console.log("Ejemplo String")
console.log(typeof numeroString) //Aqui sera un String
console.log(typeof numeroNumber) //Aqui sera un Number

//BigInt
const numeroGrande = BigInt(12541135421324879875456498745645646548)
console.log("Ejemplo BigInt")
console.log(typeof numeroGrande) 

//Symbol
const primerSymbol = Symbol(30) // es unico
const segundoSymbol = Symbol(30) // es unico
console.log("Ejemplo Symbol")
console.log( primerSymbol === segundoSymbol)
console.log(primerSymbol.valueOf())

//Null
const objetoNulo = NULL
console.log("Ejemplo Null")
console.log(objetoNulo)











