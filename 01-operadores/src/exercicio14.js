import leia from "readline-sync"
//ENTRADA
var horas = leia.questionFloat("digite a quantidade de horas: ")

//PROCESSAMENTO
var minuto = hora * 60;
var segundo = hora * 3600;

//SAIDA
console.log("o valor da hora em minuto é: "+ minuto);
console.log("o valor da hora em segundo é: " + segundo);