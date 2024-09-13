import { useState } from "react";
function Login() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    return(
        <>        
            <fieldset>
                <form action="">
                    <label>Nome de Usuário</label>
                    <input type="text" value={user} onChange={(e) => {setUser(e.target.value)}}/>
                    <label>Senha</label>
                    <input type="password" value={pass} onChange={(e) => {setPass(e.target.value)}}/>
                    <a href="#">Esqueci minha senha</a>
                </form>
                <button type="submit">Entrar</button>
                <a href="#">Cadastre-se</a>
            </fieldset>
        </>
    );
}
export default Login;