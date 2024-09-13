//Objetos sao representaçoes do mundo real, contendo propriedade e valor
//Tudo o que tiver dentro das chaves, faz parte do objeto
// const pessoa = {
//     nome: 'Bernardo',
//     idade: 19,
//     email: 'bernardo@email.com',
//     profissao: 'dev',
//     empregado: true,
// }
// pessoa.nome = 'Jurema';

// console.log(pessoa);//Mostra todas as características do objeto
// console.log(pessoa.nome);//Mostra somente uma das características
// console.log(pessoa['nome']);//Outra forma de acessar um atributo, bem vindo ao JavaScript

// delete pessoa.empregado;
// console.log(pessoa);

// pessoa.falar = function() {//Não é possivel usar Arrow Function '() => {}'
//     return `Meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}`;//this é a forma de representar os objetos em uma função
// };
// console.log(pessoa.falar())
// const ventilador = {
//     marca: 'Electrolux',
//     cor: 'branca',
//     modelo: 'abc123',
//     funciona: true,
//     gira: true,
//     ligar: function() {
//         let botao = 'sim';
//         if (botao === 'sim'){
//             console.log('ventilador está ligado')
//             return true;
//         } else if (botao === 'nao') {
//             console.log('ventilador está desligado')
//             return false;
//         }
//     }
// }
// ventilador.ligar();

// for (let chave in ventilador) {//Serve para iterar sobre as propriedades enumeráveis do objeto
//     console.log(chave + ': ' + ventilador[chave]);//Chave é uma variavel que é atribuida aos atributos do objeto
// }

// let numeros = [69, 420, 33];

// for(let numero of numeros) {//Iterage sobre valores de estruturas iteraveis como arrays e strings; Diferente do 'for in', não precisa preocupar-se com indices e atributos de propriedades; 
//     console.log(numero);
// }
// for (let number in numeros) {//Retorna a posição do elemento no array
//     console.log(number)
// }

// let nome = 'Bernardo';
// for (let name of nome) {
//     console.log(name);
// }

//Criar uma lista de carros com suas caracteristicas, usar FOR IN para listar tudo e FOR OF para apenas o modelo
// const volkswagen = {
//     modelo: 'Gol',
//     ano: 2014,
//     vidro: 'elétrico',
//     cambio: 'manual',
//     possuiGps: false
// };
// const fiat = {
//     modelo: 'Uno',
//     ano: 2018,
//     vidro: 'elétrico',
//     cambio: 'automático',
//     possuiGps: true
// };
// const chevrolet = {
//     modelo: 'Corsa',
//     ano: 1997,
//     vidro: 'manivela',
//     cambio: 'manual',
//     possuiGps: false,
// };
// const carros = [volkswagen, fiat, chevrolet];

// for (let atributo in carros) {//Só trabalha com objetos com propriedades e atributos
//     console.log(carros[atributo]);
// };
// for (let veiculos of carros) {//Só trabalha com arrays ou objetos iteráveis, como maps, string, etc
//     console.log(`Modelo: ${veiculos['modelo']}`);//console.log(veiculos.modelo)
// };

// const carros = [
//     {
//         modelo: 'Gol',
//         marca: 'Volkswagen',
//         ano: '2003',
//         preco: 10000,
//         ligarMotor: function (){console.log('ligado')}
//     },
//     {
//         modelo: 'Palio',
//         marca: 'Fiat',
//         ano: '2003',
//         preco: 15000,
//         ligarMotor: function (){console.log('ligado')}

//     },
//     {
//         modelo: 'Onix',
//         marca: 'Chevrolet',
//         ano: '2017',
//         preco: 25000,
//         ligarMotor: function (){console.log('ligado')}
//     }
// ];
// //for (cars in carros) {//Só passa o índice do objeto;SO SERVE PARA OBJETOS 
//    // console.log(`${cars}`);
// //}
// for (cars in carros) {//Aparece as propriedades do objeto
//     console.log(`Carros:`, carros[cars]);
// }
// //for (cars of carros) {//Aparece as propriedades do objeto//SO SERVE PARA OBJETOS ITERADOS(ARRAYS, ETC)
//     //console.log(cars);
// //}
// for (cars of carros) {//Aparece o atributo de uma propriedade específica
//     console.log('Modelos: ' + cars.modelo);
// }

//ForEach
// let cores = ['red', 'green', 'blue'];

// cores.forEach((cor, indice) => {console.log(indice + ':' + cor);});//Arrow Function é uma função anônima; Só deve ser usado em um Array

/* 
CONSTRUA UM ARRAY DE NÚMEROS, IMPRIMA A SOMA TOTAL DELES E IMPRIMA TODOS ELES MULTIPLICADO POR DOIS
*/

// const numeros = [3, 7, 4, 11, 16, 2, 5];
// let soma = 0;

// numeros.forEach((numero) => {
//     soma += numero;
//     console.log(`${numero} * 2 = `, numero * 2);
// });

// console.log('A soma total é de ' + soma);

//Outra forma de declarar objetos, forma antiga
// let nome = 'Bernardo';
// let idade = 19;
// let sexo = 'masculino';
// let altura = 1.83;

// let objeto = {
//     nome,
//     idade,
//     sexo,
//     altura
// };
// console.log(objeto);

//DESIGN PATTERN: FACTORY
let BikeFactory = function(cor, marca, tipo) {
    return {
        cor,
        marca,
        tipo
    };
};
let bike1 = BikeFactory('Verde', 'Monark', 'Não Sei');
console.log(bike1);