// 7 - Calcule o valor de uma expressão matemática simples
// Escreva um programa que leia dois números e um operador (+, -, *, /) e use uma estrutura switch para calcular o resultado da operação.
// Imprima o resultado.
// Dica: Utilize os operadores aritméticos em cada caso do switch.

const prompt = require('prompt-sync')();

const num1 = Number(prompt('Insira o primeiro valor: '));
const num2 = Number(prompt('Insira o segundo valor valor: '));
const operacao = prompt('Informe a operação desejada (+, -, /, *) ');
let result = 0;

switch (operacao){
    case '+':
        result = num1+num2;
        break
    case '-':
        result = num1 - num2;
        break
    case '*':
        result = num1 * num2;
        break
    case '/':
        if(num2 !== 0){
            result = num1 / num2;
        } else{
            console.log('Erro: divisão por zero!');
            result = undefined;
        }
        break
    default:
        console.log('Operação inválida!');
        result = undefined;   
}

if(result !== undefined){
    console.log(`Resultado: ${result}`);
}
