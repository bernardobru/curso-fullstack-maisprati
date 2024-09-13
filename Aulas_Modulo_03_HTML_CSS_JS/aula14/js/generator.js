/* function* meuGenerator(){
    let num1 = 1;
    let num2 = 2;
    let num3 = 3;
    let num4 = 4;
    yield `numero ${num1}`;
    yield num2;
    yield num3;
    yield num4;
    return 'pronto'; 
    let array = [1,2,3,4,5];
    yield* array;
    return 'done';
}
let generator = meuGenerator();
for (let i = 0; i < 6; i++) {
    console.log(generator.next());
} */
function* sequenciaFibonacci(n) {
    let n1 = 1;
    let n2 = 1;
    let valor = 0;
    let i = 0;
    while(i < n) {
        n1 = n2;
        n2 += valor;
        valor = n1;
        i++;
        yield valor;
    }
    return 'loop acabou';
}
function numerosFibonacci(n) {
    const fibonacci = sequenciaFibonacci(n);
    for (let i = 0; i < 11; i++) {
        console.log(fibonacci.next());
    }
}
numerosFibonacci(10);