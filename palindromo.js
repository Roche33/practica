function isPalindromo(string){
    let cadenaInvertida = '';
    const cadenaNormal = string
        .toLowerCase()
        .replaceAll(' ','')
    console.log(cadenaNormal);

    for(let x = cadenaNormal.length -1; x >= 0; x--){
        cadenaInvertida+=cadenaNormal[x];
    }
    console.log(cadenaInvertida)
    return cadenaInvertida === cadenaNormal;
}

console.log(isPalindromo('hola mundo cruel'))