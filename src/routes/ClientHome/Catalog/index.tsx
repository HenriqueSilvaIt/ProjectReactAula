import './styles.css'
import SerachBar from '../../../components/SearchBar';
import CatalogCards from '../../../components/CatalogCards';
import ButtonNextPage from '../../../components/ButtonNextPage';

import * as productService from '../../../services/product-services'; /*importando
todas as funções do service, com o apelido productService */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductDTO } from '../../../models/product';

export default function Catalog() {

    /* Use state para armazenar a lista de produtos */
    const [products, setProducts] = useState<ProductDTO[]> ([]); /* o tipo do useState vai ser uma lista de productDTO 
    por isso os [] para dizer que é lista de DTO, e no final ([]) para dizer que ela vai começar vazia
    , dentro do parentese () no useStat sempre é o valor iniciar no caso estamos colocando
[] para dizer que é uma lista vazia */

    useEffect(() => {
        axios.get("http://localhost:8090/products/?size=12") /*size é a quantidade
        de objetos que quero que retorna dessa requisição http */
        .then(response => { /*retorno acima é uma promisse, então vamos usar o then para dizer
            oque vai fazer se essa resposta retornar com sucesso */
            setProducts(response.data.content) /* set Product vai pegar o retorno da Http que é os objetos
            e colocar no objeto Product
            response.data pega só a informação do objeto
            mas como no Json da api os objetos estão dentro de um vetor/list nós colocamos o .content no final
            (content é o nome do vetor/lista que criamos  no json) */
        })
    }, [])


    /*como estamos chamando o componente      <HeaderClient /> temos o html todo mais esse compoenente
    como é dois tem que colocar dentro do fragment <>  </*/
    return (

       

        < main >
        <section id="catalog-section" className="dsc-container">
            <SerachBar />
            <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">

            {

                /* sem o backend normal mente pegando services aqui 
            productService.findAll().map(
                product => <CatalogCards key={product.id} product={product} /> /* Tem que colocar
                um atributo key sempre que for mostrar na tela
                uma coleção no react, a key é um id do objeto que tem que ser passado
                tem que ser um elemento único */

                /* Com backend sem precisar do findAll, deixando o use effect pegar a lsita de objetos
                 e o map  pegar a lista do objeto e colocar o unico objeto no catalog card pelo id*/
                        products.map(
                product => <CatalogCards key={product.id} product={product} /> /* Tem que colocar
                um atributo key sempre que for mostrar na tela
                uma coleção no react, a key é um id do objeto que tem que ser passado
                tem que ser um elemento único */
            )
        }

            
            </div>
            <ButtonNextPage />
        </section>
        </main >


    );


}
