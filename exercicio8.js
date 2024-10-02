const readline = require('readline');

// configuraçao para entrada de dados do terminal 
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

// Funçao para vereficar se um numero é par 
function ehPar(numero) {
    return  numero % 2 === 0;
}

// Funçao para verificar se um numero é impar
function ehImpar(numero) {
    return numero % 2 !== 0;
}

// Pergunta aos dois numeros e faz as verificaçoes 
rl.question("Digite o primeiro numero: ", (imput1) => {
const num1 = parseInt(imput1);
}