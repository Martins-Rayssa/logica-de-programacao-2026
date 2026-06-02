import leia, { questionFloat } from "readline-sync"

var valorProduto = questionFloat("digite o valor do produto: ");

if(valorProduto < 20) {
    var valorFINAL = VALORpRODUTO + (valorProduto * ( 45 / 100))
    console.log("valor final do produto é: R$" + valorFinal.tofixed(2));
} else {
    var valorFinal = valorProduto + (valorProduto * (30 / 100));
    console.log("valor final do produto é: R$" + valorFinal.tofixed(2));

}