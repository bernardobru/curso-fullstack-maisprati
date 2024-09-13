// const professor = {
//     nome: "Tony Stark",
//     materia: 'Matemática',
//     notas: {
//         aluno1: 3.25,
//         aluno2: 1.66,
//         aluno3: 4.125
//     }
// };
//Utilizar ForIn para iterar sobre as propriedades dentro de notas, calcular a media e imprimir se a turma ta acima da média (média 3.0)
// let media = 0;
// let soma = 0;
// let alunos = 0;
// let aprovado;

// for (let aluno in professor.notas) {
//     soma += professor.notas[aluno];
//     alunos ++;
//     if (alunos > professor.notas[aluno.length]) {
//         break;
//     }
//     media = soma / alunos;
//     if (media >= 3.00) {
//         aprovado = true;
//     }else {
//         aprovado = false;    
//     };
// };

//media = soma / alunos

//console.log(aprovado === true ? `TURMA ACIMA DA MÉDIA ${media.toFixed(2)}` : `TURMA ABAIXO DA MÉDIA ${media.toFixed(2)}`);

// if (aprovado === true) {
//     console.log('TURMA ACIMA DA MÉDIA');
// } 
// if (aprovado === false) {
//     console.log('TURMA ABAIXO DA MÉDIA');
// };

/*Utilizar For of para iterar sobre o array biblioteca;
 *Para cada livro, verificar se foi lançado antes de 2000;
 *Imprimir o ano e o título dos livros que obedecem essa condição
 */
// const biblioteca = [
//     {
//         titulo: "Trilogia Senhor dos Anéis",
//         autor: "J.R.R Tolkien",
//         ano: 1954
//     },
//     {
//         titulo: "O Poder do Agora",
//         autor: "Eckhart Tolle",
//         ano: 2000
//     },
//     {
//         titulo: "O Hobbit",
//         autor: "J.R.R Tolkien",
//         ano: 1937
//     },
//     {
//         titulo: "Harry Potter e a Ordem da Fênix",
//         autor: "J.K Rolling",
//         ano: 2003
//     },
//     {
//         titulo: "Harry Potter e as Relíquias da Morte",
//         autor: "J.K Rolling",
//         ano: 2007
//     }
// ];

// for (let livros of biblioteca) {
//     if (livros.ano < 2000) {
//         console.log(livros.titulo + ', ' + livros.ano)
//     };
// };

/*Com ForEach para iterar sobre o array, crie um objeto para armazenar os filmes por genero  
 *Para cada filme, verificar se o genero ja existe no objeto 
 *Se o filme ja estiver no objeto, adicione um a contagem, senão, adicione ao objeto com contagem de 1
 *Apos o loop, imprima os valores do objeto contagem
 */
// const filmes = [
//     {
//         titulo: "Vingadores: Ultimato",
//         genero: 'super heroi'
//     },
//     {
//         titulo: "Clube da Luta",
//         genero: 'suspense'
//     },
//     {
//         titulo: "A Princesa e o Sapo",
//         genero: 'desenho'
//     },
//     {
//         titulo: "Homem Aranha",
//         genero: 'super heroi'    
//     },
//     {
//         titulo: "Senhor dos Anéis: A Sociedade do Anel",
//         genero: 'fantasia'
//     }
// ];

// let contagem = {};

// filmes.forEach(filme => {
//     if (contagem[filme.genero]) {
//         contagem[filme.genero]++;
//     } else {
//         contagem[filme.genero] = 1;
//     }
// });
// for (let genero in contagem) {
//     console.log(`Existem ${contagem[genero]} filmes do genero ${[genero]}`)
// };

//PESQUISA BINÁRIA
//Divide pela metade o número de elementos de um array a cada pesquisa. Exemplo:
//100/2=50/2=25/2=12,5/2=6,25/2=3,125/2=1,5625...
//Desenvolva um algoritmo capaz de receber uma lista, e um valor correto e execute uma pesquisa binária para encontrar o valor certo
// const prompt = require('prompt-sync')();
// const list= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const binarySearch = (array, target) => {//declaração da função
//     let minimum = 0;//declaração do valor mínimo
//     let maximum = array.length - 1;//declaração do valor máximo(tamanho do array-1(começa na posição 0))
//     while (minimum <= maximum){//enquanto o valor minimo for menor ou igual ao valor máximo
//         const mid = Math.floor((minimum + maximum) / 2);//declaração do valor do meio(média entre o mínimo e o máximo)
//         const guess = array[mid];//declaração da tentativa(número da posição média)

//         if (guess === target) {//se o meu alvo for igual à tentativa
//             return mid;//retorna a média;return pode encerrar a função
//         } else if (guess > target) {//senão, se a tentativa for maior que o alvo
//             maximum = mid - 1;//o valor máximo recebe a média menos um(posição anterior a média)
//         } else {//senão, se a tentativa for menor que o alvo, o valor minimo recebe a média mais um(posição após a média)
//             minimum = mid + 1;
//         };
//     };

//     return null;//se não for um valor da lista, retorna valor nulo
// };
// console.log(binarySearch(list, 13));

/* 
    spread = espalhar 
    rest = juntar
*/
// let titulo = 'titulo';
// console.log(titulo);
// console.log(...titulo);
// console.log([...titulo]);
// let listaTimes = ['inter', 'gremio', 'botafogo', 'flamengo', 'juventude'];
// let listaTimes2 = ['paysandu', 'ceara', 'nautico', 'fluminense', 'corinthians'];
// let listaTimesCompleta = [...listaTimes, ...listaTimes2];//'espalhou' os arrays dentro de um terceiro array
// console.log(`${listaTimesCompleta}`);

// //Também pode ser usada em objetos
// let carro = {marca: 'volkswagen', modelo: 'gol'}
// let pessoa = {nome: 'Jandir', idade: '43'}
// let fichaCarro = {chassi: '8OSUGDSGJUHSDH', placa: 'aop-6734', ...pessoa, ...carro };
// console.log(fichaCarro);

//rest
function sum (...parameters) {//irá juntar os parâmetros em um array, util para funçoes com diversos parâmetros
    let result = 0;
    console.log(parameters);
    parameters.forEach(x => result += x);
    return result;
}
console.log(sum(5, 2, 4, 7, 1));

function times(num1, ...num){
    let result = 0;
    console.log(num1);
    console.log(num);
    num.forEach(element => result += num1 * element)
    return result;
}
console.log(times(7, 4, 12, 22, 54, 1));