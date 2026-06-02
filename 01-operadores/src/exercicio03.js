import leia from 'readline-sync'

//ENTRADA
var autura = leia.questionFloat('digite a altura do retangulo: ');
var largura = leia.questionFloat('digite a largura do retangulo: ');

//PROCESSAMENTO
var area = altura * largura;

//SAIDA
console.log("a area do retangulo é: " + area.toFixed(2));