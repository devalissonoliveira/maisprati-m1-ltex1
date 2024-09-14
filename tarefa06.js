// Verifique o dia da semana
// Escreva um programa que leia um número de 1 a 7 e use uma estrutura switch para imprimir o dia da semana correspondente. (1 = // Domingo, 2 = Segunda-feira, etc.)

const prompt = require('prompt-sync')();

let num = Number(prompt('Digite um número entre 1 e 7 e descubra o dia da semana correspondente: '));

if(!isNaN(num)){
   if(num >= 1 && num <= 7){
        switch (num){
                case 1:
                    console.log('Domingo');
                    break
                case 2:
                    console.log('Segunda');
                    break
                case 3:
                    console.log('Terça');
                    break
                case 4:
                    console.log('Quarta');
                    break
                case 5:
                    console.log('Quinta');
                    break
                case 6:
                    console.log('Sexta');
                    break
                case 7:
                    console.log('Sábado');
                    break            
        }
    } else {
        console.log('Número fora do intervalo entre 1 a 7');
    }

} else {
   console.log('Valor digitado não é numérico.');    
}