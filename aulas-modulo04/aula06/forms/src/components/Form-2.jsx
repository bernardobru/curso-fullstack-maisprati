import { useState } from "react";
function FormTwo() {
    const [address, setAddress] = useState({
        street: '',
        city: '',
        postalCode: ''
    });
    const handleSubmit = (event) => {
        if(!address.street || !address.city || !address.postalCode) {
            alert('Preencha todos os campos!');
        } else {
            alert(`Rua: ${address.street}\nCidade: ${address.city}\nCEP ${address.postalCode}`);
        }
        event.preventDefault();
    }
    const handleChange = ((event) => {
        const {name, value} = event.target;
        setAddress((prevAddress) => ({...prevAddress, [name]: value}))
        });
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Rua:
                    <input type="text" name="street" onChange={handleChange}/>
                </label>
                <hr />
                <label>
                    Cidade:
                    <input type="text" name="city" onChange={handleChange} />
                </label>
                <hr />
                <label>
                    CEP:
                    <input type="text" name="postalCode" onChange={handleChange} />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>        
    );
}
export default FormTwo;