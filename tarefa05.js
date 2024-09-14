// Escreva um programa que leia a idade de um nadador e use uma estrutura if/else para determinar a categoria do nadador de acordo com a idade:
//             Infantil A: 5 - 7 anos
//             Infantil B: 8 - 10 anos
//             Juvenil A: 11 - 13 anos
//             Juvenil B: 14 - 17 anos
//             Adulto: 18 anos ou mais

const prompt = require('prompt-sync')();

let idade = parseInt(prompt('Digite a idade: '));

if(!isNaN(idade)){
     if((idade >= 5) && (idade <= 7)){
        console.log('Categoria do namador(a) é INFATIL A');        
     } else if ((idade >= 8) && (idade <= 10)){
        console.log('Categoria do namador(a) é INFATIL B');
     } else if ((idade >= 11) && (idade <= 13)){
        console.log('Categoria do namador(a) é JUVENIL A');
     } else if ((idade >= 14) && (idade <= 17)){
        console.log('Categoria do namador(a) é JUVENIL B');
     } else if (idade >= 18){
        console.log('Categoria do namador(a) é ADULTO');
     } else {
        console.log('Nadador não se encaixa em nenhuma das categorias.');
     }

} else {
    console.log('Valor digitado não é numérico.');    
}