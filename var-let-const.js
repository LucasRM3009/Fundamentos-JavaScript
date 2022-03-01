// Digitar no terminal o comando { node type-var-let-const.js } para executar o código.
// Executar uma das partes - var, let ou const. As que não forem executadas tem que comentar (para não gerar erro).

// var

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;

// let

let forma = 'retângulo';
let altura = 5;
let comprimento = 7;
let area;

if (forma === 'retângulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);


// const

const forma = 'quadarado';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);
