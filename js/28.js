//Imports y Exports
//import funcionImportada from './funciones.js'
//const resultado = funcionImportada(20,20)

import {sumar} from './funciones.js'//Objeto
import {sumar as misuma} from './funciones.js'//Objeto
const resultado = sumar(20,20)
const resultado2 = misuma(50,50)

console.log(resultado)
console.log(resultado2)