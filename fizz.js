// Versión básica (puedes hacerla primero):
// - Múltiplos de 3 → "Fizz"
// - Múltiplos de 5 → "Buzz"
// - Múltiplos de ambos → "FizzBuzz"
// - Resto → el número

// Versión extendible (esto diferencia a un intern bueno):
// Las reglas deben pasarse como parámetro para poder
// agregar "Trimble" para múltiplos de 7 sin cambiar la función.

function fizzBuzz(n, rules) {
    

}

const rules = [
  { divisor: 3, word: 'Fizz' },
  { divisor: 5, word: 'Buzz' },
  { divisor: 7, word: 'Trimble' },
];

fizzBuzz(15, rules) // Debería imprimir "FizzBuzz"
fizzBuzz(9, rules)  // Debería imprimir "Fizz"
fizzBuzz(10, rules) // Debería imprimir "Buzz"
fizzBuzz(14, rules) // Debería imprimir "Trimble"
fizzBuzz(8, rules)  // Debería imprimir "8" (no es múltiplo de 3, 5 o 7)