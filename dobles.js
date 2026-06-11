const numeros = [71, 41, 19, 88, 3, 65];

// const dobles = numeros.reduce(
//     (acc, numero)=>
//     {
//         acc.push(numero * 2)
//         return acc;
//     }
//     ,[]
//     )

// console.log(dobles);

const array2 = [];

for(let x =0; x < numeros.length; x++){
    array2.push(numeros[x] * 2)
}
console.log(array2);