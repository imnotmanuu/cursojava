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

rl.question("digite o segundo numero: ",(imput) => {
    const num2 = parceInt(imput2);
})
 
//Verificaçoes de booleanas 
    let primeiroMaior = num1 > num2;
    let primeiroPar = ehPar(num1);
    let segundoImpar = ehImpar(num2);

//Exibe os resultados das verificaçoes 
console.log("O primeiro numero e maior que o segundo?", primeiroMaior);
console.log("O primeiro numero e par?", primeiroPar);
console.log("O segundo numero e impar", segundoImpar);

//Operadores logicos 
console.log("O primeiro numero e maior que o segundo e e par?", primeiroMaior && primeiroPar);
console.log("O primeiro ou o segundo numero e par?", primeiroPar || ehPar (num2));

rl.close();}):  
