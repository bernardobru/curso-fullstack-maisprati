function Contact() {
    return(
        <>
            <h1>Contate-nos</h1>
            <fieldset>
                <legend>Contato</legend>
                <form action="">
                    <label htmlFor="nome">Nome</label>
                    <input name="nome" type="text"/>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email"/>
                    <label htmlFor="msg">Mensagem:</label>
                    <textarea name="msg"></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </fieldset>
        </>
    );
}
export default Contact;