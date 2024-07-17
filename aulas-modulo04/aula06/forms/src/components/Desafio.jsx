import { useState } from 'react';
function FormChallenge() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const handleChange = ((event) => {
        const {name, value} = event.target;
        setForm((prevForm) => ({...prevForm, [name]: value}))
        const validatePassword = () => {
            if(form.confirmPassword !== form.password) {
                
            }
        }
    }) 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" name='name' onChange={handleChange} />
                </label>
                <label>
                    E-mail:
                    <input type="email" name="email" onChange={handleChange} />
                </label>
                <label>
                    Senha:
                    <input type="password" value={form.password} name="password" onChange={handleChange}/>
                </label>
                <label>
                    Confirmação de senha:
                    <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange}/>
                </label>
            </form>
        </div>
    );
}