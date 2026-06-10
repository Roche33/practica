//Ternarios

const autenticado = true

autenticado? console.log('Si esta autenticado'): console.log('No esta autenticado, dirijir hacia login')


//Doble ternario

const saldo = 600
const pagar = 700
const tarjeta = true

saldo > pagar ? 
    console.log('Pyedes pagar con saldo') : 
    tarjeta? console.log('Puedes pagar con tarjeta'):
    console.log('No puedes pagar')