// Declaração de função

function minhaFuncao(param) {
    // bloco de códico
}

// minhaFuncao("param");

// expressão de função

const soma = function(num1, num2) {return num1 + num2}
// console.log(soma(1, 1));

//  diferença principal : HOSTING
// funções e var são "listadas" no topo do nosso código

console.log(apresentar());

function apresentar() {
    return "olá";
}

console.log(soma(1, 1)); //erro de Systax ou Reference
const soma = function(num1, num2) {return num1 + num2;} 
