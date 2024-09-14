// Verifique a faixa etária de uma pessoa
// Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
//             Criança: 0 - 12 anos
//             Adolescente: 13 - 17 anos
//             Adulto: 18 - 59 anos
//             Idoso: 60 anos ou mais

// Dica: Utilize uma estrutura switch além bloco if/else para imprimir uma mensagem específica para cada faixa etária.

const prompt = require('prompt-sync')();

let idade = Number(prompt('Informe a sua idade: '));

let faixaEtaria;

if(idade >= 0 && idade <=12){
    faixaEtaria = 'criança'
} else if (idade >= 13 && idade <= 17){
    faixaEtaria = 'adolescente'
} else if (idade >= 18 && idade <= 59){
    faixaEtaria = 'adulto'
} else if (idade >= 60){
    faixaEtaria = 'idoso'
} else {
    console.log('Error! valor inserido inválido.');    
}

switch (faixaEtaria) {
    case 'criança':
        console.log('Você é uma criança!');
        break
    case 'adolescente':
        console.log('Você é um(a) adolescente!');
        break
    case 'adulto':
        console.log('Você é um adulto(a)!');
        break
    case 'idoso':
        console.log('Você é um(a) idoso(a)!');
        break
}