const users = [
  { name: 'ana',    age: 17, active: true  },
  { name: 'misael', age: 22, active: true  },
  { name: 'jorge',  age: 25, active: false },
  { name: 'yair',   age: 20, active: true  },
];

// Tu solución:
function getActiveAdults(users) {
    return users.filter(user => user.active && user.age >= 18).map(user => user.name.toUpperCase());
}

// Esperado: ['MISAEL', 'YAIR']
console.log(getActiveAdults(users))