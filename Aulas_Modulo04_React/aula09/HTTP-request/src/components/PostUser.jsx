import { useState } from "react";
import axios from 'axios';
function PostUser() {
    const [user, setUser] = useState({
        nome: '',
        dataNascimento: '',
        cpf: ''
    });
    const handleChange = function(event) {
        const {name, value} = event.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const handleSubmit = async function(event) {
        event.preventDefault();
        try {
            const response = await axios.post('https://reqres.in/api/users', user); 
            console.log(response);
            alert(`Usuário criado com sucesso!\nNome: ${response.data.nome}\nData de nascimento: ${response.data.dataNascimento}\nCPF: ${response.data.cpf}\nCriado em: ${response.data.createdAt}`);
        } catch(error) {
            console.error(error);
            alert('Erro ao criar o usuário!');
        }
    }
    return(
        <>
        <h1>Registrar cliente</h1>
        <fieldset>
            <legend>Formulário de cadastro</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome completo:</label>
                    <input type="text" name="nome" id="nome" onChange={handleChange}  />
                </div>
                <div>
                    <label htmlFor="idade">Data de nascimento:</label>
                    <input type="text" name="dataNascimento" id="idade" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="cpf">CPF:</label>
                    <input type="text" name="cpf" id="cpf" onChange={handleChange} />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </fieldset>
        </>
    );
}
export default PostUser;