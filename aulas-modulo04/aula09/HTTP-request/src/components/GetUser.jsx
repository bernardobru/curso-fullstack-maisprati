import axios from "axios";

function GetUser() {
    const axiosGet = () => {
        axios.get('https://reqres.in/api/users/2')
        .then(response => {
            console.log('Dados do usuário:', response.data);
            alert(`Usuário recuperado:\n${JSON.stringify(response)}`);
        })
        .catch(error => {
            console.error('Erro ao recuperar o usuário', error);
            alert('Erro ao recuperar os dados do usuário');
        });
    }
    return (
        <button onClick={axiosGet}>Recuperar dados</button>
    )
}
export default GetUser;