//Array em JS é um objeto, possuí metodos e atributos próprios
// let lista_compras = Array();

// lista_compras[0] = "Shampoo";
// lista_compras[1] = "Condicionador";
// lista_compras['x'] = 100;

// console.log(lista_compras);

// let lista_frutas = ['Banana', 'Maçã'];

// console.log(lista_frutas);

// let lista_viagem = Array ('Passagens', 'Malas');//Ordem sequencial, mesmo sem declarar a ordem

// console.log(lista_viagem);

//Arrays Multidimensionais
// let lista_coisas = Array();

// lista_coisas['Frutas'] = Array(); //O elemento 'Frutas' é um Array dentro do Array 'lista_coisas'; Posição 0 é um Array
// lista_coisas['Frutas'][0] = "Morango";
// console.log(lista_coisas['Frutas'][0]);

// lista_coisas['Frutas'][0] = 'Morango';
// lista_coisas['Frutas'][1] = 'Uva';
// lista_coisas['Frutas'][2] = 'Maçã';
// lista_coisas['Frutas'][3] = 'Pera';

// lista_coisas['Viagem'] = Array();
// lista_coisas['Viagem'][0] = 'Passagens';
// lista_coisas['Viagem'][1] = 'Malas';
// console.log(lista_coisas);

// lista_coisas['Higiene'] = ['Sabonete', 'Shampoo'];
// console.log(lista_coisas['Higiene']);

// Inserção de elementos no final do Array
// lista_coisas['Frutas'].push('Banana');// Adiciona elementos ao final do Array
// console.log(lista_coisas['Frutas']);

//Inserção de elementos no começo do Array
// lista_coisas['Frutas'].unshift('Laranja');// Adiciona elementos no começo do Array
// console.log(lista_coisas['Frutas']);

//Excluir de elementos no final do Array
// lista_coisas['Frutas'].pop();
// console.log(lista_coisas['Frutas']);

//Exclusão de elementos no começo do Array
// lista_coisas['Frutas'].shift();
// console.log(lista_coisas['Frutas']);

//Pesquisa dentro do Array
// const prompt = require('prompt-sync')();

// let lista_produtos = Array('PC', 'Caneta', 'Chuteira', '69', 'Pinto');

// let aux = lista_produtos.indexOf(prompt('O que você procura? '));

// if (aux === -1) {// -1 é o valor que retorna caso o item nao esteja no Array
//     console.log("O elemento não existe no Array");
// }else {
//     console.log("O elemento existe e está na posição", + aux);// + aux é a concatenação da String com a variável "aux"
// }

//Ordenação em Arrays
let lista_produtos = Array('PC', 'Caneta', 'Chuteira', '69', 'Pinto', 'Abacaxi');
console.log(lista_produtos.sort());//Ordena em ordem alfabética e em ordem crescente(só sequencial)