import { useEffect, useState } from 'react';
import './style.css'
import { ProductDTO } from '../../models/product';
import * as productService from '../../services/product-services';
import ProductDetailsCard from '../ProductDetailsCard';
import { Link, useParams } from 'react-router-dom';

export type FormData = {
    code: string;
}

export default function SerachBar() {

    const params = useParams();

    /*useState*/

    const [product, setProduct] = useState<ProductDTO | undefined>();
    const [formData, setFormData] = useState<FormData>({ code: "" }); /* formulário é bom sempre começar
    com um strng vazio*/
    const [error, setError] = useState<string | undefined>();
    const [formSubmit, setFormSubmit] = useState(false);


    /* função para popular a variavel formData quando for preenchida*/

    function handleInputChange(event: any) {
        /*const value = event.target.value;
        const name = event.target.name;*/
        const value = event.target.value;
        const code = event.target.name;
        setFormData({ ...formData, [code]: value });

    }

    /*Função para dectar que o click no botão*/
 
    function handleFormSubmit(event: any) {
        event.preventDefault();
        setFormSubmit(true);
    }

    /*Função para, se o botão for clicado, fazer a busca do  barCode no banco de dados e retorna
    na variavel formData */

    useEffect(() => {

        if (formSubmit && formData) {
            productService.findByBarCode(formData.code) 
            .then(response => {
                setProduct(response.data)
                product ? (
                    <ProductDetailsCard product={product} />
                ) : (
                    <h2>{error}</h2>
                )
                setFormSubmit(response.data);
            })
            .catch(error =>{
                if (error.response.status === 404) {
                    setError("Código de barras não encotrado");
                }
            })
         
        }

    }, [product, formSubmit, formData.code]);

    


    return (
        <>
        <form  onSubmit={handleFormSubmit}
                className="dsc-search-bar dsc-mt20">
            <button type="submit">🔎︎</button>
            <input value={formData.code} name="code" type="text" placeholder="Nome do produto" 
            onChange={handleInputChange} /> 
            <button type="reset">🗙</button>
        </form>
        {product ? (
                    <ProductDetailsCard product={product} />
                ) : (
                    <h2>{error}</h2>
                )
        
            }
     
        </>
    );
}