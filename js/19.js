//Condicionales || y &&

const saldo = 600
const pagar = 500
const tarjeta = true

if(saldo > pagar){
    console.log('Si puede pagar con tu saldo')
} else if(tarjeta){
    console.log('Si puede pagar con su tarjeta')
} else {
    console.log('No puedes pagar')
}

if((saldo > pagar) || tarjeta){
    console.log('Si puede pagar')
} else {
    console.log('No puedes pagar')
}


/**
 *  || Por lo menos debe cumplirse
 *  && Los dos deben cumplirse
 */