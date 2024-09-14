// Verifique a estação do ano
// Escreva um programa que leia um número de 1 a 4 e use uma estrutura switch para imprimir a estação do ano correspondente. (1 =
// Primavera, 2 = Verão, 3 = Outono, 4 = Inverno)

const prompt = require('prompt-sync')();

let num = Number(prompt('Digite um número entre 1 e 4 e descubra o estação do ano correspondente: '));

if(!isNaN(num)){
   if(num >= 1 && num <= 4){
        switch (num){
                case 1:
                    console.log('Primavera');
                    break
                case 2:
                    console.log('Verão');
                    break
                case 3:
                    console.log('Outono');
                    break
                case 4:
                    console.log('Inverno');
                    break      
        }
    } else {
        console.log('Número fora do intervalo entre 1 a 4');
    }

} else {
   console.log('Valor digitado não é numérico.');    
}