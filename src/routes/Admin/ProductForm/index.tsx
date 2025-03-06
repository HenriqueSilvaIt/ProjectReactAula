import './style.css';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/form';
import * as productervice from '../../../services/product-services';

export default function ProductForm() {

    const params = useParams(); /* para colocara rota ul */

    const isEditing = params.productId !== 'create'; /* se a rota for dirente de create significa que estou editando um
    produto e não criando um novo, se for create está editando  */

  const [formData, setFormData] = useState<any>({ /* any é para o type script
        n reclemar dos valores, para objeto ser um objeto livre e ter qualquer atributo dentro dele
        de qualquer tipo */
        /* os objetoa abaixo, vai ser igual o objeto do product by id do postman*/
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
        },
        price: {
            value: 200,
            id: "price",
            name: "price",
            type: "number", /* para aceitar somente númeroes*/
            placeholder: "Preço",
            validation: function(value: any) {
                return Number(value)/*v convertido para Number*/ > 0;
            },
            /*messagem de erro caso essa função de falso*/
            message: "Favor informar um valor positivo"
        },
        imgUrl: {
            value: "",
            id: "imgUrl",
            name: "imgUrl",
            type: "text",
            placeholder: "Imagem",
        }
    })


    useEffect(() => {

        const obj = forms.validate(formData, "price"); /*estamos mandando validar o texto
        e gerar uma informação para retornar o novo campo invalid informando se é verdadeiro ou falso*/
        console.log(obj);

        if(isEditing)/* se for verdade o iediting quer
        dizer que a rota n é create, é de edição de produto */ {
            productervice.findById(Number(params.productId)) /*number para converter para número
            se n vai reclamara*/ 
                .then(response => {
                    console.log(response.data); /* vai retornar o produto(objeto)
                    ou seja se for uma rota diferente de create, ele vai trazer o formulário
                    já com os dados do produto preenchido porque é editação*/
                    const newFormData = forms.updateAll(formData,response.data)
                   setFormData(newFormData); /*deixando os campos fo formulário já preenchido -  gerando
                    um novo objeto e no campo value vai colocar o valor que estava no banco de dados */
                })
        }
    }, [])


     function handleInputChange(event: any) {
      
            setFormData(forms.update(formData/*objeto já com as informações do input */, event.target.name/*campo da cainha
                do input que estou mexendo*/, event.target.value/*valor que
                digitar*/)); /* destruturamos
            o formData para aproveitar o que tinha nele e onde tem o cmapo com o nome name
            vamos colocar o novo valor value que  está digitado 
            
            Agora novo formulário temos que preservar todo objeto, então vamos pegar tudo que já tinha no objeto, porém no campo
       value, vamos colocar o value criado na função event.target.valu*/
        }


    return (
        <main>
            <section id="product-form-section" className="dsc-container">
                <div className="dsc-product-form-container">
                    <form className="dsc-card dsc-form">
                        <h2>Dados do produto</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <FormInput {...formData.name} 
                                className="dsc-form-control"
                                onChange={handleInputChange} 
                                />
                            </div>
                            <div>
                            <FormInput {...formData.price} 
                                className="dsc-form-control"
                                onChange={handleInputChange} 
                                />
                            </div>
                            <div>
                            <FormInput {...formData.imgUrl} 
                                className="dsc-form-control"
                                onChange={handleInputChange} 
                                />
                            </div>
                        </div>

                        <div className="dsc-product-form-buttons">
                            <Link to="/admin/products">
                            <button type="reset" className="dsc-btn dsc-btn-white">Cancelar</button>
                            </Link>
                            <button type="submit" className="dsc-btn dsc-btn-blue">Salvar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>


    )
} 