/*método 'log' do objeto 'console', 
imprime informações no console

console.log("Hello, 'World!'");//serve para colocar aspas simples na saída do console
console.log('Hello, "World!"');//serve para colocar aspas duplas na saída do console
console.log(`Hello, World!`);//serve para colocar variaveis na string

console.log(10);
console.log(7.5);
 
console.log(1000, 1520.10, 'Bernardo');

let nome = "Bernardo";
let prof = "Jaques";
console.log("Meu nome é", nome, "e estou na aula", 4, "do professor", prof);

nome = "Bernardo"; -> Cria uma variável global no código NÃO RECOMENDADO
let nome = "Bernardo"; -> Declarção padrão de variáveis
var nome = "Bernardo"; -> Declaração antiga, pode ser redeclarada
const nome = "Bernardo"; -> Constante, variável que é inalterada, precisa ser atribuída
ex: const pi = 3,1415

let teste;
valor indefinido

let nulo = null; valor nulo

let numero = 10.1;
let frase = "Sou dev";
let bool = true;
bool = false;


console.log(typeof(numero));
console.log(typeof(frase));
console.log(typeof(bool));
console.log(typeof(bool));
typeof() nos mostra qual o tipo da variável

let n = 10;
let n2 = 5;
let n3 = "5";
let a = "Hello,"
let b = " World!"
console.log(n + n2); //+ pode ser concatenação(juntar uma string com outra) ("A" + "B") = AB
console.log(n + n3); //10 + "5" = 105
console.log(a + b);
console.log(n - n2);
console.log(n * n2);
console.log(n / n2);
console.log(n ** n2);
console.log(n % n2);

casting: transforma o num1 em Inteiro, ao invés de uma concatenação
só concatena quando usa o +, caso use outro operador, fará a operação aritmética

let num1 = "6";
let num2 = parseInt(num1);
console.log(num1 - n);

Se o num1 for Float e o num2 for parseInt, a operação só será feita com o inteiro(4)
Também pode colocar o Number(x), para que seja um tipo número, ao invés de Int ou Float
Se for uma operação, a saída vai ser NaN(Not a Number)

let num1 = "4 * 8";
let num2 = Number(num1);
let num2 = parseFloat(num1);
let num2 = parseInt(num1);
console.log(n + num2);
*/

/*let contador = 1;
console.log(contador)

contador = contador + 1;

console.log(contador);

Ao invés disso, fazer assim:

contador++;
console.log(contador);

pŕe e pós incremento e decremento
let contador = 1;
console.log(contador);
console.log(contador++); 
console.log(contador);

Operações de atribuição
const passo = 5;

let contador = 0;

contador += passo;
console.log(contador);
contador -= passo;
console.log(contador);
contador *= passo;
console.log(contador);
contador /= passo;
console.log(contador);

Operadores relacionais 
console.log(10 < 5);
console.log(10 <= 5);
console.log(10 > 5);
console.log(10 >= 5);
console.log(10 == 5);
console.log(10 != "10");
console.log(10 !== "10");
console.log(10 == "10");compara o valor true
console.log(10 === "10");compara o valor e o tipo false
console.log(10 != "10");false
console.log(10 !== "10");true

Operadores lógicos

console.log((10 > 5) && (10 > 2));
console.log((10 > 5) || (10> 2 ));
console.log(!(10 > 5));
console.log((10 > 5) && !(10 > 2));

const user = 'Bernardo';
const password = '12345';
const autentication = user === 'Bernardo' && password === "12345";

console.log(autentication);

console.log(!true);

Estrutura condicional
const nota = 59;

if(nota >= 60) {
    console.log("Aprovado")
} 
else if(nota >=40 && nota < 60) {
    console.log("Recuperação")
} 
else {
    console.log("Reprovado")
}

const idade = 30

if (idade >= 18 && idade <= 32) {
    console.log("Pode fazer")
}
else {
    console.log("Não pode")
}

Operador ternário, semelhante ao if/else
<condição> ? <verdadeiro> : <falso>;
let ternario = (10 < 100) ? "Sim" : false; não é necessário usar apenas booleano
console.log(ternario);
*/
const prompt = require('prompt-sync')();

let teste = prompt("Digite seu nome:");
console.log(teste);