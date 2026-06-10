//Comparacion y operador estricto

const numero1 = 20
const numero2 = '20'

if(numero1 == numero2){
    console.log('Si son iguales - no estricta')
} else {
    console.log('No son iguales - no estricta')
}

if(numero1 === numero2){
    console.log('Si son iguales - estricta')
} else {
    console.log('No son iguales - estricta')
}


/**
 *   == Comparacion no estricta
 *   === Comparacion estricta
 */