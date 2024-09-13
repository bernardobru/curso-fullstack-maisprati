import { useState } from 'react';
function FormUserLogin() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }); 
    const [error, setError] = useState({});
    const [submit, setSubmit] = useState(false);
    function validateData() {
        const errors = {};
        if(!form.name) errors.name = "O campo de Nome é obrigatório!";
        if(!form.email) {
            errors.email = 'O campo de E-mail é obrigatório!'
        }
        if(!form.password) {
            errors.password = "O campo de Senha é obrigatório"
        } else if(form.password.length < 8) {
            errors.password = "A Senha precisa ter pelo menos 8 caracteres"
        }
        if(!form.confirmPassword) {
            errors.confirmPassword = "O campo de Confirmação de Senha é obrigatório"
        } else if(form.confirmPassword !== form.password) {
            errors.confirmPassword = "As senhas precisam coincidir!"
        }
        return errors;
    }
    function handleChange(event) {
        setForm({...form,[event.target.name]: event.target.value})
    }
    function handleSubmit(event) {
        event.preventDefault();
        const validate = validateData();
        if(Object.keys(validate).length === 0) {
            setSubmit(true);
        } else {
            setError(validate);
        }
    }

    return (
        <div>
            <h1>Registre-se agora</h1>
            {submit && <p>Registrado com sucesso!</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nome:
                    </label>
                    <input type="text" name='name' onChange={handleChange} />
                    {error.name && <p>{error.name}</p>}
                </div>
                <div>
                    <label>
                        E-mail:
                    </label>
                    <input type="email" name="email" onChange={handleChange} />
                    {error.email && <p>{error.email}</p>}
                </div>
                <div>
                    <label>
                        Senha:
                    </label>
                    <input type="password" name='password' value={form.password} onChange={handleChange}/>
                    {error.password && <p>{error.password}</p>}
                </div>
                <div>
                    <label>
                        Confirmação de senha:
                    </label>
                    <input type="password" name='confirmPassword' value={form.confirmPassword} onChange={handleChange}/>
                    {error.confirmPassword && <p>{error.confirmPassword}</p>}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
export default FormUserLogin;