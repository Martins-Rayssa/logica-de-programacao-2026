import leia from"readline-sync"

var numeroMagico = Math.floor(Math.random() * 1000) + 1;

let tentativa;
let qtdTentativas = 0;

console.log("=======JOGO NUMERO MÁGICOS=======")

do {
    tentativa = leia.question("digite sua tentativa: ");
    qtdtentativas++;

    if(tentativa > numeroMagico) {
        console.log("o numero magico MENOR!!")
    }else if(tentativa < numeroMagico){
        console.log("o numero magico é MAIOR!!")
    }

}while(tentativa !== numeroMagico);
