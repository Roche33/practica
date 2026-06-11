# Guía de Práctica de Algoritmos JavaScript para Entrevistas Intern / Junior

## Objetivo

Practicar problemas comunes de entrevistas técnicas para posiciones Intern y Junior enfocadas en JavaScript.

---

# Nivel 1 - Fundamentos

## 1. Invertir una cadena

**Entrada:**

```js
"trimble"
```

**Salida esperada:**

```js
"elbmirt"
```

Implementa:

```js
function reverseString(str) {

}
```

---

## 2. Contar vocales

**Entrada:**

```js
"javascript"
```

**Salida esperada:**

```js
3
```

Implementa:

```js
function countVowels(str) {

}
```

---

## 3. Encontrar el número mayor

**Entrada:**

```js
[5, 10, 2, 8, 20]
```

**Salida esperada:**

```js
20
```

Implementa:

```js
function maxNumber(arr) {

}
```

---

## 4. Verificar palíndromo

**Entrada:**

```js
"reconocer"
```

**Salida esperada:**

```js
true
```

Implementa:

```js
function isPalindrome(word) {

}
```

---

# Nivel 2 - Arrays

## 5. Eliminar duplicados

**Entrada:**

```js
[1,1,2,2,3,4,4,5]
```

**Salida esperada:**

```js
[1,2,3,4,5]
```

Implementa:

```js
function removeDuplicates(arr) {

}
```

---

## 6. Encontrar el número faltante

**Entrada:**

```js
[1,2,3,4,6,7]
```

**Salida esperada:**

```js
5
```

Implementa:

```js
function missingNumber(arr) {

}
```

---

## 7. FizzBuzz

Para números del 1 al 100:

* Múltiplos de 3 → `"Fizz"`
* Múltiplos de 5 → `"Buzz"`
* Múltiplos de ambos → `"FizzBuzz"`
* Resto → el número

Implementa:

```js
function fizzBuzz() {

}
```

---

## 8. Encontrar el segundo número más grande

**Entrada:**

```js
[10, 5, 8, 20, 15]
```

**Salida esperada:**

```js
15
```

Implementa:

```js
function secondLargest(arr) {

}
```

---

# Nivel 3 - Métodos Modernos de JavaScript

## 9. Implementar map usando reduce

Ejemplo:

```js
const nums = [1,2,3];

const result = myMap(nums, n => n * 2);

console.log(result);
// [2,4,6]
```

Implementa:

```js
function myMap(arr, callback) {

}
```

---

## 10. Agrupar usuarios por edad

**Entrada:**

```js
const users = [
  { name: "Ana", age: 20 },
  { name: "Luis", age: 20 },
  { name: "Pedro", age: 25 }
];
```

**Salida esperada:**

```js
{
  20: ["Ana", "Luis"],
  25: ["Pedro"]
}
```

Implementa:

```js
function groupByAge(users) {

}
```

---

## 11. Contar frecuencia de palabras

**Entrada:**

```js
"hola mundo hola javascript mundo"
```

**Salida esperada:**

```js
{
  hola: 2,
  mundo: 2,
  javascript: 1
}
```

Implementa:

```js
function wordFrequency(text) {

}
```

---

# Nivel 4 - Preguntas Típicas de Entrevista

## 12. Anagramas

Verifica si dos palabras son anagramas.

**Entrada:**

```js
"listen"
"silent"
```

**Salida esperada:**

```js
true
```

Implementa:

```js
function areAnagrams(str1, str2) {

}
```

---

## 13. Primer carácter repetido

**Entrada:**

```js
"javascript"
```

**Salida esperada:**

```js
"a"
```

Implementa:

```js
function firstRepeatedChar(str) {

}
```

---

## 14. Balanceo de paréntesis

**Entrada:**

```js
"((()))"
```

**Salida esperada:**

```js
true
```

**Entrada:**

```js
"(()"
```

**Salida esperada:**

```js
false
```

Implementa:

```js
function isBalanced(str) {

}
```

---

# Nivel 5 - Los Favoritos de las Empresas

## 15. Two Sum

**Entrada:**

```js
nums = [2,7,11,15]
target = 9
```

**Salida esperada:**

```js
[0,1]
```

Porque:

```js
2 + 7 = 9
```

Implementa:

```js
function twoSum(nums, target) {

}
```

---

## 16. Encontrar el elemento más frecuente

**Entrada:**

```js
[1,2,3,2,2,4,5]
```

**Salida esperada:**

```js
2
```

Implementa:

```js
function mostFrequent(arr) {

}
```

---

## 17. Flatten Array

**Entrada:**

```js
[1,[2,[3,[4]]]]
```

**Salida esperada:**

```js
[1,2,3,4]
```

Implementa:

```js
function flatten(arr) {

}
```

---

# Ejercicio Estilo Trimble

## 18. Resumen de Productos

Dado:

```js
const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 }
];
```

Obtén:

```js
{
  total: 600,
  average: 200,
  ids: [1,2,3]
}
```

Implementa:

```js
function summarizeProducts(products) {

}
```

---

# Async / Await

## 19. Obtener Nombre de Usuario

Dada la función:

```js
function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id,
        name: "John"
      });
    }, 1000);
  });
}
```

Implementa:

```js
async function getUserName(id) {

}
```

Debe regresar:

```js
"John"
```

---

# Bonus - Nivel Entrevista Técnica Real

## 20. Debounce

Implementa una función debounce.

Ejemplo:

```js
const debouncedSearch = debounce(search, 500);
```

Implementa:

```js
function debounce(fn, delay) {

}
```

---

## 21. Throttle

Implementa una función throttle.

Ejemplo:

```js
const throttledScroll = throttle(handleScroll, 100);
```

Implementa:

```js
function throttle(fn, delay) {

}
```

---

## 22. Agrupar Productos por Categoría

**Entrada:**

```js
const products = [
  { name: "Laptop", category: "Tech" },
  { name: "Mouse", category: "Tech" },
  { name: "Pizza", category: "Food" }
];
```

**Salida esperada:**

```js
{
  Tech: ["Laptop", "Mouse"],
  Food: ["Pizza"]
}
```

Implementa:

```js
function groupProducts(products) {

}
```

---

## 23. Deep Clone

Implementa una función que realice una copia profunda de un objeto.

```js
function deepClone(obj) {

}
```

---

## 24. Memoization

Implementa una función de memoización.

```js
function memoize(fn) {

}
```

---

## 25. Implementar Promise.all

Implementa una versión simplificada de:

```js
Promise.all()
```

```js
function myPromiseAll(promises) {

}
```

---

# Recomendación de Estudio

Prioriza este orden:

1. Arrays y Strings
2. Objetos y Hash Maps
3. map, filter y reduce
4. Recursión básica
5. Async/Await
6. Closures
7. Debounce y Throttle
8. Complejidad temporal (Big O)

Si puedes resolver correctamente los ejercicios 1-19 sin ayuda y explicar la complejidad temporal de cada solución, estarás muy bien preparado para una entrevista técnica de Intern/Junior enfocada en JavaScript.
