const edades = [15, 22, 17, 30, 12, 45];

// Usamos .filter() para hacer la pregunta: ¿es mayor o igual a 18?
const mayoresDeEdad = edades.filter(edad => {
    return edad >= 18;
});

console.log(mayoresDeEdad); 
// Resultado: [22, 30, 45]
// (Solo pasaron los que cumplieron la condición)