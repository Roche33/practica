const arreglo = [5, 10, 2, 8, 20];
function numeroMayor(arreglo){
    let numero = 0;

    for(x=0; x< arreglo.length; x++){
        if(arreglo[x]> numero){
            numero = arreglo[x];
        }
    }
    return numero;
}

console.log(numeroMayor(arreglo))