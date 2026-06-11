const array = [1,1,2,2,3,4,4,5];

function eliminarDuplicados(arreglo){
    let arregloSinDuplicados= [];

    for(let x=0; x<arreglo.length; x++){
        if(!arregloSinDuplicados.includes(arreglo[x])){
            arregloSinDuplicados.push(arreglo[x])
        }
    }
    return arregloSinDuplicados;
}

console.log(eliminarDuplicados(array))