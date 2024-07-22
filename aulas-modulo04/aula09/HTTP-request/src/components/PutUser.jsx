import axios from 'axios';
import { useState } from 'react';
function PutUser() {
    const [user, setUser] = useState({
        nome:'',
        sobrenome:''
    }); 
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {            
            const put = await axios.put('https://reqres.in/api/users/1', user);
            console.log(put);
            console.log(put.data);
        } catch(error) {
            console.error(error);
        }
    }
    const handleChange = function(event) {
        const {name, value} = event.target;
        setUser({
            ...user,
            [name]: value
        });
    }
    return(
        <>
            <h1>Modificar dados</h1>
            <fieldset>
                <legend>Modificar</legend>
                <form onSubmit={handleSubmit}>
                <label htmlFor="modificado1">Modificar nome</label>
                <input type="text" name='nome' id="modificado" onChange={handleChange}/>
                <label htmlFor="modificado2">Modificar sobrenome</label>
                <input type="text" name='sobrenome' id="modificado2" onChange={handleChange} />
                <button type='submit'>Modificar</button>
                </form>
            </fieldset>
        </>
    );
    }
        
    
export default PutUser;