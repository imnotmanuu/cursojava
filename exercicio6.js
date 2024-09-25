const readline = require('readline');

 const r1 = readline. createInterface({
input: process.stdout
 });

 // pedir ao usuarioa para inserir o nome 
 r1.question('insira seu nome: ', (nome) => {
// Exibir o nome em maiúsculas 
console.log(' seu nome em maiúsculas: ' + nome.toUpperCase() ); 
// Contar o número de letras( sem espaços)
let numLetras = nome.replace(/\s+/g, ''). length;
console . log('número de letras no nome: ' +numLetras);

//Exibir a primeira letra do nome 
console.log('A primeira letra do seu nome é: ' + nome.charAt(0));

r1.close();

 });