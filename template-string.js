const nome = "Lucas";
const idade = 2021 - 2003;
const cidadeDeNascimento = "São Paulo";

const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;
const apresentacao_template_string = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao);
console.log(apresentacao_template_string);
