import leia from "readline-sync"

//ENTRADA
var numero = leia.questionInt(" Digite um número: ")

//PROCESSAMENTO
var dobro = numero * 2;
var triplo = numero * 3;

//SAIDA
console.log("o numero é " + numero);
console.log(" O dobro do número é: " + dobro);
console .log(" O triplo do números é: " + triplo);