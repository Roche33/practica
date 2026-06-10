function invertirCadena (texto){
    let cadena = "";
    for(x = texto.length - 1; x >= 0; x--){
        cadena += texto[x];
    }
    console.log(cadena)
}

invertirCadena("hola mundo") // "odnum aloh"