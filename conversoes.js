//  Digitar no terminal o comando { node truthy-falsy.js } para executar o código.

// Tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString); // false
console.log(numero == numeroString); // true
console.log(numero + numeroString); // 456456

// Number() - Converter uma String(texto) em um Number(número)
// String() - Converter um Number(número) em uma String(texto)
console.log(numero + Number(numeroString)); // 912

// conversão explícita
