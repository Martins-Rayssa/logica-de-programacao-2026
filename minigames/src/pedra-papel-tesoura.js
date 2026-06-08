import leia from 'readline-sync'

var opcoes = ["PEDRA", "PAPEL", "TESOURA"]

var escolhaComputador = Math.floor(Math.random() * 3);
var escolhaUsuario = leia.keyInSelect(opcoes, "Escolha sua opcao:");

if(escolhaUsuario === -1) {
    console.log("OPCAO INVALIDA, JOGO CANCELADO!!!")
} else {
    console.log("VOCE ESCOLHEU: " + opcoes[escolhaUsuario]);
    console.log("O COMPUTADOR ESCOLHEU: " + opcoes[escolhaComputador]);

    if(escolhaComputador === escolha) {
        console.log("EMPATOUUUU!!!!")
    } else if(
        escolhaUsuario === 0 && escolhaComputador === 2||
        escolhaUsuario === 1 && escolhaComputador === 0||
     escolhaUsuario === 2 && escolhaComputador === 1
    ){
        console.log("USUARIO GANHOUUUUUU!!!!!")
    }else {
        console.log("COMPUTADOR GANHOUUU!!")
    }
}
