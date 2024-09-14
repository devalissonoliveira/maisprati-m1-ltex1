// Calcule a média de três números e determine o conceito
// Escreva um programa que leia três notas de um aluno, calcule a média e use uma estrutura if/else para determinar o conceito (A, B, C, D, E, F) baseado na média. Imprima o conceito.
// Dica: A média é a soma das notas dividida por três. Defina os intervalos para cada conceito.

// A maior ou igual 10
// B entre 9 e 8
// C está no 7
// D entre 6, 5 e 4
// E entre 3, 2 e 1
// F menor ou igual 0

const prompt = require('prompt-sync')();

const nota1 = Number(prompt('Digite a primeira nota: '));
const nota2 = Number(prompt('Digite a segunda nota: '));
const nota3 = Number(prompt('Digite a terceira nota: '));
const media = (nota1 + nota2 + nota3)/3;
let conceito;


if(media >= 10){
    console.log(`A Media é: ${media.toFixed(2)}`);
    conceito = 'A';    
} else if (media >= 8 && media < 10) {
    console.log(`A Media é: ${media.toFixed(2)}`);
    conceito = 'B';  
} else if (media >= 7 && media < 8) {
    console.log(`A Media é: ${media.toFixed(2)}`); 
    conceito = 'C'; 
} else if (media >= 4 && media < 7) {
    console.log(`A Media é: ${media.toFixed(2)}`);
    conceito = 'D';  
} else if (media >= 1 && media < 4) {
    console.log(`A Media é: ${media.toFixed(2)}`);
    conceito = 'E'; 
} else {
    console.log(`A Media é: ${media.toFixed(2)}`);
    conceito = 'F'; 
}

console.log(`O conceito do aluno é: ${conceito}`);