function contarVocales(string){
    let arreglo = ['a','e','i','o','u'];
    let contador = 0;
    for(x = 0; x < string.length; x++){
        if(arreglo.includes(string[x])){
            contador++;
        }
    }
    return contador;
}

console.log(contarVocales('javascript'))