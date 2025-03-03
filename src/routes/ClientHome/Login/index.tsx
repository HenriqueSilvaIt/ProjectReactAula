import { useState } from 'react';
import './style.css';
import { CredentialsDTO } from '../../../models/auth';
import { loginRequest } from '../../../services/auth-service';

export default function Login() {

    const [formData, setFormData] = useState<CredentialsDTO> ({
        username: '',
        password: ''
    })

    function handleInputChange(event: any) {
        const value = event.target.value; /* para pegar o valor que está digitado na caixinha de texto*/
        const name = event.target.name; /* para pegar o nome da caixinha */
        setFormData({...formData, [name]: value}); /* destruturamos
        o formData para aproveitar o que tinha nele e onde tem o cmapo com o nome name
        vamos colocar o novo valor value que  está digitado l */
    }


    function handleSubmit(event: any) {
        event.preventDefault();
        loginRequest(formData);
    }

    return (
/* no input tem que ter o fecha / elemento aqui no tsx é diferente do html que n precisa fechar
 no dsc-form erro depois tem que colocar erro caso não preencha campo */
        <main>
            <section id="login-section" className="dsc-container">
                <div className="dsc-login-form-container">
                    <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <input
                                name="username" /* tem que ser igual ao atributo que está no useState*/
                                value={formData.username} /*valor vai ser o formData.username
                                sempre que faz valu tem que faze onChan tb*/
                                className="dsc-form-control" 
                                type="text" 
                                placeholder="Email"
                                onChange={handleInputChange}/> 
                                <div className="dsc-form-error"></div>
                            </div>
                            <div>
                                <input
                                name="password"
                                value={formData.password} 
                                className="dsc-form-control" 
                                type="password" 
                                placeholder="Senha"
                                onChange={handleInputChange}/>
                            </div>
                        </div>

                        <div className="dsc-login-form-buttons dsc-mt20">
                            <button type="submit" className="dsc-btn dsc-btn-blue">Entrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>

    );
}