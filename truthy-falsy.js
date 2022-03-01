//  Digitar no terminal o comando { node truthy-falsy.js } para executar o código.

// Boolean

const usuarioLogado = true;
const contapaga = false;

// truthy ou falsy

// 0 => false
// 1 => true

console.log(0 == false);
console.log("" == false);
console.log(1 == true);
console.log("");

// undefined ==> valor indefinido
// null ==> vazio ou nada

let minhaVar;
let varNull = null;

console.log("mihhaVar: " + minhaVar);
console.log("varNull: " + varNull);
console.log("");

console.log("Typeof minhaVar: " + typeof minhaVar);
console.log("Typeof varNull: " + typeof varNull);

let numero = 3;
let texto = "Alura"; 

console.log("Typeof numero: " + typeof numero);
console.log("Typeof texto: " + typeof texto);
