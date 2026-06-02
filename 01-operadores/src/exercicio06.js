import leia from "readline-sync"

//ENTRADA
var corrida01 = leia.questionFloat("digite o valor da primeira corrida: R$");
var corrida02 = leia.questionFloat("digite o valor da segunda corrida: R$");
var corrida03 = leia.questionFloat("digite o valor da terceira corrida: R$"):
var corrida04 = leia.questionFloat("digite o valor da quarta corrida: R$" );
var corrida05 = leia.questionFloat("digite o valor da quinta corrida: R$");

//PROCESSAMENTO 
var valorBruto = corrida01 + corrida02 + corrida03 +corrida04 + corrida05:
var valorDescontoApp = valorBruto * (25 / 100); // CALCULO PORCENTAGEM
var valorliquido = valorBruto - valorDescontoApp;

//SAIDA 
console.log("o valor total arrecado com os descontos é de R$" +valorliquido.toFixed(2))