// Verifique se um ano é bissexto
// Escreva um programa que leia um ano e use uma estrutura if para verificar se o ano é bissexto. Um ano é bissexto se for divisível por 4,
// mas não por 100, exceto se também for divisível por 400. Imprima uma mensagem apropriada.

const prompt = require('prompt-sync')();

const ano = Number(prompt('Informe um ano: '));

if((ano % 4 === 0 && ano % 100 !==0) || (ano % 400 === 0)){
    console.log(`O ano ${ano} é bissexto.`);    
}

if((ano % 4 !== 0) || (ano % 100 === 0 && ano % 400 !== 0)){
    console.log(`${ano} não é um ano bissexto.`);    
}