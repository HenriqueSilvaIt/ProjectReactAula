import { useContext, useState } from 'react';
import './style.css';
import { CredentialsDTO } from '../../../models/auth';
import * as authService from '../../../services/auth-service';
import { useNavigate } from 'react-router-dom';
import { ContextToken } from '../../../utils/context-token';
import FormInput from '../../../components/FormInput';
export default function Login() {
    const navigate = useNavigate();

    const { setContextTokenPayload } = useContext(ContextToken);

    const [formData, setFormData] = useState<any>({ /* any é para o type script
        n reclemar dos valores, para objeto ser um objeto livre e ter qualquer atributo dentro dele
        de qualquer tipo */
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
            },
            message: "Favor informar um email válido",
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
        }
    })

    function handleInputChange(event: any) {
        const value = event.target.value; /* para pegar o valor que está digitado na caixinha de texto*/
        const name = event.target.name; /* para pegar o nome da caixinha, é o mesmo nome que você coloca
         no input name=" */
        setFormData({...formData, [name]: { ...formData[name], value: value}}); /* destruturamos
        o formData para aproveitar o que tinha nele e onde tem o cmapo com o nome name
        vamos colocar o novo valor value que  está digitado 
        
        Agora novo formulário temos que preservar todo objeto, então vamos pegar tudo que já tinha no objeto, porém no campo
   value, vamos colocar o value criado na função event.target.valu*/
    }


    function handleSubmit(event: any) {
        event.preventDefault();/*mesmo o formData tendo 2 informações  ele puxo argumento */
        authService.loginRequest({username: formData.username.value, password: formData.password.value})
        .then(response => {
                authService.saveAcessToken(response.data.access_token); /* response.data e pega o campo
                acess token do postman*/
                navigate("/cart");
                setContextTokenPayload(authService.getAccessTokenPayload());
            
        })
        .catch(error =>{
            console.log("Erro de no login", error);
        })
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
                                <FormInput
                                {...formData.username}
                                className="dsc-form-control" 
                                onChange={handleInputChange}/> 
                                <div className="dsc-form-error"></div>
                            </div>
                            <div>
                                <FormInput
                                { ...formData.password } /* todo os dados
                                já estão nor form data do objeto username */
                                className="dsc-form-control" 
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