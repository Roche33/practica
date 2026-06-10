//funciones - Function declaration

//sumar() //Las funciones se pueden llamar antes de su declaracion

function sumar() {
    console.log( 2 + 2 )
}

sumar()

//Fuciones con parametros
function sumarParametros(numero1, numero2){
    console.log(numero1 + numero2)
}

sumarParametros(4,4)

//Funciones con parametros con valor default
function sumarDefault(numero1=0, numero2=0){
    console.log(numero1 + numero2)
}

sumarDefault(12)

//Funciones con retorno
function sumarReturn(numero1=0, numero2=0){
     return (numero1 + numero2)
}

const resultado = sumarReturn(10,6)
console.log(resultado)

//Funciones con retorno de valores adicionales
function sumarReturnOtros(numero1=0, numero2=0){
    return [(numero1 + numero2), 'Esta es una suma']
}

const resultadoOtros = sumarReturnOtros(10,6)
console.log(resultadoOtros)


//Funciones con retorno de objeto
function sumarReturnObjeto(numero1=0, numero2=0){
    return {
        suma:(numero1 + numero2),
        mensaje: 'Esta es una suma'
    }
}

const resultadoObjeto = sumarReturnObjeto(10,6)
console.log(resultadoObjeto)