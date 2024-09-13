const prompt = require ('prompt-sync')();

// let senha;
// do {
//     senha = prompt("Digite sua senha: ");
// } while (senha !== "1234");

// console.log("Senha Correta!");

// let i = 0;
//  do { //Faça o bloco de comandos enquanto a condição for verdadeira
//     console.log(i);
//     i ++;
//  } while(i <= 10)


//A diferença pro "while" é que, no "do while" a verificação é fim, no "while" é feita no começo. Por exemplo:
//  let i = 10;

// while (i != 10) {
//     console.log(i);
// }

//  do {
//     console.log(i);
//  } while(i != 10)

//Só irá imprimir o comando do "do while", pois a verificação vem após o bloco de comando; no caso do "while", a verificação é feita antes.

//Pedir ao usuário para adivinhar um número de 1 a 10]

//////Minha tentativa//////

// const correct = 7;
// let attempt;
// 
// do {
    // attempt = Number(prompt("Digite o número correto: "));
// } while (attempt !== correct);
// 
// console.log("ACERTOU NESSE CARALHO!!!")

const correct = Math.floor((Math.random() * 10) + 1); //Math é uma biblioteca para números matemáticos
let attempt;

do {
    attempt = parseInt(prompt("Digite um número: "));
    if (attempt < correct) {
        console.log("Digite um número maior")
    } else if (attempt > correct) {
        console.log("Digite um número menor")
    }
} while(attempt !== correct);

console.log("Parabéns! você acertou!")
