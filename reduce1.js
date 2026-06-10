// const nums = [1, 2, 3, 4, 5];

// const res = nums.reduce(
//     (acum,item)=> acum + item,0
// )
// console.log(res);
// Multiplicar todos los números
// const nums = [2, 3, 4];
// const res = nums.reduce(
//     (acum,item)=>acum * item
// )
// console.log(res);
// const nums = [10, 5, 30, 2, 15];
// const res = nums.reduce(
//     (max, num)=> {
//         return num > max ? num : max
//     } 
// )
const fruits = ["apple", "banana", "orange", "grape"];
const contar = fruits.reduce(
    (acum,item)=> {
        return acum + 1;
    },0
)
console.log(contar);