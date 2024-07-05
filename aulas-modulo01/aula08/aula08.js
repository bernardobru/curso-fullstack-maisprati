//Exercitando Arrays e Funções

//Exercicio 1: somar todos os elementos de um Array:
// let numeros = Array(1, 4, 5, 8, 2, 5, 3, 6, 7, 9);
// //Função sem retorno se chama procedimento
// function somaElementos(vetor) {
//     let soma = 0;
//     for (let i = 0; i < vetor.length; i++) {// .length serve para contar os elementos de um array
//         soma += vetor[i];
//     };
//     return soma;
// };

// console.log("A soma é: ", somaElementos(numeros));
//Exercicio 2: Encontrar o maior número de um Array

// let elementos = [77, 77.1, 77.2];

// function maiorElemento(vetor) {
//     let maior = vetor[0];//assim o programa vai identificar o elemento na posição 0 do array, se esse for o maior, o programa já se encerra ali, sem necessidade de fazer uma vez o loop
//     for (let i = 0; i < vetor.length; i++){
//         if (vetor[i] > maior) {
//             maior = vetor[i];
//         };
//     };
//     return maior;
// };
// console.log("O maior elemento é: ", maiorElemento(elementos));

//Exercicio 4: reverter um array
// let elementos = Array(12, 8, 4, 32, 21, 5);

// function reverteArray(vetor){
//     let result = Array();
//     for(let i = vetor.length - 1; i >= 0; i--){// 'vetor.length -1' é a última posição do array(array com 6 elementos, menos 1, fica 5, pois a inicial é 0)
//         result.push(vetor[i]);
//     };
//     return result;
// };

// console.log(reverteArray(elementos));

//Exercicio 5: somar todos os elementos de uma matriz
// function somaMatriz(matriz) {
//     let soma = 0;
//     for (let i = 0; i < matriz.length; i++) {// Loop das linhas         
//         for (let j = 0; j < matriz[i].length; j++) {//Loop das colunas
//             soma += matriz[i][j];
//         };
//     };
//     return soma;
//};
// console.log(somaMatriz([[1, 2], [3, 4]]));

//Exercício 6: Encontra o maior número de uma matriz
// function maiorMatriz(matriz) {   
//     maior = matriz[0][0];
//     for (let i = 0; i < matriz.length; i++){
//         for (let j = 0; j < matriz[i].length; j++) {
//             if (matriz[i][j] > maior) {
//                 maior = matriz[i][j];
//             };
//         };
//     };
//     return maior;
// };

// console.log(maiorMatriz([[2, 4, 6], [3, 5, 69, 33, 22]]));

//Funções avançadas: String
/* 
String é um tipo primitivo, porém quando interpretado pelo JS, ele se torna objeto, possuindo métodos e propriedades
*/
// console.log('Bernardo Bruxel'.length);//Tamanho da String
// console.log('Bernardo Bruxel'.charAt(9));//Caractere na nona posição
// let nome = 'Bernardo';
// console.log(nome.indexOf('r'));//Retorna a posição da primeira ocorrencia do caractere

// console.log(nome);
// let nome2 = nome.replace('Bernardo', 'odranreB');//Troca de lugar o nome (1ºparâmetro) pelo 2º parâmetro
// console.log(nome2)

// console.log(nome.substr('4', '9'));//Método legado; Usa-se para tomar como inicio o 1º parâmetro e vai até o 2º parâmetro

// console.log(nome.toLocaleUpperCase());//Deixa tudo maiúsculo
// nome = 'BERNARDO';
// console.log(nome.toLocaleLowerCase());//Deixa tudo minúsculo
// nome = ' Bernardo ';
// console.log('$'  + nome.trim() + '$');//Substitui os espaçoes em branco que estão nas extremidades b  pelos caracteres que estão nas extremidades;

//Funções avançadas: Matemáticas
// let x = Math.ceil(10.77);//Arredonda para cima o número
// console.log(x);

// let y = Math.floor(10.88);//Arredonda para baixo o número
// console.log(y);

// let z = Math.round(10.9);//Se for maior que 0.5, arredonda para cima
// console.log(z);

// let a = Math.round(10.4);//Se for menor que 0.5, arredonda para baixo
// console.log(a);

// let b = Math.random();//Gera um número aleatório entre 0 e 1
// console.log(b);

//Funções avançadas: Datas
// let data = new Date();
// console.log(data.getDate());//Serve para pegar a data do dia atual
// console.log(data.getMonth() + 1);//Serve para pegar pegar o mẽs atual (começa com 0 e vai até 11)
// console.log(data.getFullYear());//Serve para pegar o ano inteiro

// console.log(data.getDate(),'/', data.getMonth() + 1, '/', data.getFullYear())

// console.log(data.toString());//Retorna a data completa como se fosse uma string

// //data.setDate(data.getDate() + 1000);//Seta a data com base na data atual, mais o número que você adicionar(numero de dias)
// //data.setMonth(data.getMonth() + 20);//Seta a data com base no mes atual, mais o número que você adicionar(numero de meses)
// data.setFullYear(data.getFullYear() + 5);//Seta a data com base no ano atual, mais o número que você adicionar(numero de anos)
// console.log(data.toString()); 

// console.log(data.getTime());//Retorna em milisegundos o tempo percorrido desde o dia 01/01/1970 à 00:00