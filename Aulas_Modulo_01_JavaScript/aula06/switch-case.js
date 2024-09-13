//Switch Case
const prompt = require('prompt-sync')();

let mes = parseInt(prompt("Digite um mês(1-12)"));
let meses_dias;
let ano;
//Verifica qual o mês e imprime quantos dias tem o mês e pergunta se o ano for bissexto, caso o ano seja bissexto, imprimirá que o mês 2 tem 29 dias
switch (mes) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        meses_dias = 31;
        break;
    case 4: case 6: case  9: case 11:
        meses_dias = 30;
        break;
    case 2:
        ano = prompt("O ano é bissexto? ");
        if (ano === "sim" || ano === "Sim") {
            meses_dias = 29;
        }
        else {
            meses_dias = 28;
        }
        break;
    default:
        meses_dias = undefined;
        break;
}

if (meses_dias != undefined) {
    console.log("O mês", mes, "tem", meses_dias, "dias");
}
else {
    console.log("Operação inválida");
}
/*
let dia = parseInt(prompt("Qual dia da semana?(1-7)"));
let nome_dia;

//Verifica qual número foi digitado e imprime o nome do dia

switch (dia) {
    case 1:
        nome_dia = "Domingo";
        break; //É necessário, pois se não houver, o último caso será atribuído a variável dia
    case 2:
        nome_dia = "Segunda-Feira";
        break;
    case 3:
        nome_dia = "Terça-Feira";
        break;
    case 4:
        nome_dia = "Quarta-Feira";
        break;
    case 5:
        nome_dia = "Quinta-Feira";
        break;
    case 6:
        nome_dia = "Sexta-Feira";
        break;
    case 7:
        nome_dia = "Sábado";
        break;
    default: //Serve para caso nenhuma condição seja atendida
        break;
}
//Verifica se o dia da semana for indefinido 
if (nome_dia != undefined) {
    console.log("O dia é", nome_dia);
}
else {
    console.log("Opção inválida");
}
*/
