import leia from 'readline-sync';

var nota1, nota2, nota3; 

nota1 = leia.questionFloat("Digite a primeira nota: ");
nota2 = leia.questionFloat("Digite a segunda nota: ");
nota3 = leia.questionFloat("digite a terceira nota: ");

var soma = nota1 + nota2 + nota3;
var media = soma / 3;

console.log("a media é:" + media.toFixed(2));






/*var nome = 'gustavo';
nome = 'gustavo roberto';
var idade1 = "28";
var idade2 = 28;


if(idade1 == idade2){ // OPERADOR DE IGUALDADE (VALOR)
    console.log("são iguais (==)")
}

if(idade1 === idade2){
    console.log("são iguais (===)")
} 
*/
