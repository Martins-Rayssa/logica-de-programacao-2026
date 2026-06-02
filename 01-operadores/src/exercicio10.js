import leia from "readline-sync"

//ENTRADA
var nota1 = leia.questionFloat("digite a primeira nota: ");
var nota2 = leia.questionFloat("digite a segunda nota: ");
var nota3 = leia.questionFloat("digite a terceira nota: ");

//PROCESSAMENTO
var media = (nota1 + nota2 + nota3) /3;
var resultado = media >= 7 ? "PROVADO" : "REPROVADO";


//SAIDA
console.log(" A média é: " + media.toFixed(2) + " e ele esta: " + resultado);