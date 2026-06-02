import leia from "readline-sync"

//ENTRADA
var metros = leia.questionFloat(" Digite um número em metros: ");

//PROCESSAMENTO
var centimetros = metros * 100;
var milimetros = metros * 1000;

//SAIDA
console.log(" Os metros em centimetros é: " + centimetros.toFixed(2))
console.log(" Os metros em milimetros é: " + milimetros.toFixed(2))