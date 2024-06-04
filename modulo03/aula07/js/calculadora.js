//Se o tamanho dos elementos da tela da calculadora forem menores que 15, então será adicionado(concatena) os números digitados na tela
let tela = document.formulario.tela.value;
function inserir(valor) {
    if(document.formulario.tela.value.length < 15) {
        document.formulario.tela.value += valor;
    }   
}
//Quando essa função é chamada, é setado um valor vazio à tela da calculadora
function limparTela() {
    document.formulario.tela.value = '';
}
//Quando essa função é chamada, é deletado o último valor digitado na tela da calculadora
function deletar() {
    let expressao = document.formulario.tela.value;
    document.formulario.tela.value = expressao.substring(0, expressao.length - 1);
}
function calcularTotal() {
    let resultado = document.formulario.tela.value;
    if(resultado) {
        document.formulario.tela.value = eval(resultado);
    }
}