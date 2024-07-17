const livros = ['O Hobbit', 'Harry Potter'];
function HelloWorld() {
    const livroEscolhido = Math.random() > 0.5 ? livros[0] : livros[1];
    return (
        <div>
            <h1 className={classes.HelloWorld}>Hello, World!</h1>  
            <p>Primeiro componente React!</p>
            <p>{livroEscolhido}</p>
        </div>
    )
}
export default HelloWorld;