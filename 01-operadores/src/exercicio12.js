import leia from 'readline-sync'

//ENTRADA 
var salario = leia.questionFloat("digite o salario: R$");

//PROCESSAMENTO
var novoSalario = salario + (salario * (15 / 100));

//SAIDA
console.log("o novo salario do " + nome + "sera de R$")
