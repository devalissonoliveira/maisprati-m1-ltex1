// Verifique se um número é positivo, negativo ou zero
// Escreva um programa que leia um número e use uma estrutura if para verificar se o número é positivo, negativo ou zero. Imprima uma
// mensagem apropriada para cada caso.

const prompt = require('prompt-sync')();

const num1 = Number(prompt('Digite um número: '));

if (num1 > 0){
    console.log('O número informado é positivo!');    
}

if (num1 < 0){
    console.log('O número informado é negativo!')
}

if(num1 === 0){
    console.log('O número é zero.');    
}

if(!(num1 > 0) && !(num1 < 0) && !(num1 === 0)){
    console.log('Error! Informe um número.')
}
