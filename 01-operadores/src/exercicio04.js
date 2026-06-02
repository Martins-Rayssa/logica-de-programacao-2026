import leia, { questionInt } from 'readline-sync'

//ENTRADA
var anos = leia.questionInt("digite a quantidade de anos: ");
var meses = leia questionInt("digite a quantidade e meses:");
var dias = leia.questionInt("digite a quantidade de dias: ")

//PROCESSAMENTO
var anosEmDias = anos * 365;
var mesesEmDias = meses * 30;
var totalDias = anosEmDias + meses mesesEmDias + dias;

var totalDias2 =(anos * 365) + (meses * 30) + dias; // EQIVALENTE AS 3 LINHAS ACIMA 

//SAIDA 
console.log("voce viveu "+ totalDias + "dias");
console.log("voce viveu "+ totalDias + " dias ");