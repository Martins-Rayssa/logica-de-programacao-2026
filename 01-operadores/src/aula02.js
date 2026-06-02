import leia from 'readline-sync'

var idade = leia.questionFloat("digite sua idade");

var quantMeses = idade * 12;
console.log("quantidade de meses é: " + quantMeses);

var quantdias = idade * 365;
console.log("quantidade de dias é " + quantdias + " dias");
