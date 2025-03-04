import './styles.css'
import SerachBar from '../../../components/SearchBar';
import CatalogCards from '../../../components/CatalogCards';
import ButtonNextPage from '../../../components/ButtonNextPage';


import * as productService from '../../../services/product-services'; /*importando
todas as funções do service, com o apelido productService */
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import { hasAnyRoles } from '../../../services/auth-service';

type QueryParams = {
    page: number;
    name: string;
}

export default function Catalog() {
    console.log("T", hasAnyRoles([]));
    
    const [isLastPage, setIsLastPage] = useState(false); /*false para dizer que n é a ultima pagina ainda */

    /* Use state para armazenar a lista de produtos */
    const [products, setProducts] = useState<ProductDTO[]> ([]); /* o tipo do useState vai ser uma lista de productDTO 
    por isso os [] para dizer que é lista de DTO, e no final ([]) para dizer que ela vai começar vazia
    , dentro do parentese () no useStat sempre é o valor iniciar no caso estamos colocando
[] para dizer que é uma lista vazia */

    /* ante const [productName, setProductName ] = useState("");*/

    /* useState composto dentro de um objeto com todos parâmetros */

    const [queryParams, setQueryParam] = useState<QueryParams>({
        page: 0,
        name: ""
    })

    useEffect(() => {

        productService.findPageRequest(queryParams.page, queryParams.name) /*MÉTODO do service que vai chamar a requisição com axios */
        /* axios.get("http://localhost:8090/products/?size=12") size é a quantidade
        de objetos que quero que retorna dessa requisição http */
        .then(response => { /*retorno acima é uma promisse, então vamos usar o then para dizer
            oque vai fazer se essa resposta retornar com sucesso */
            const nextPage = response.data.content;
            setProducts(products.concat(nextPage)); /*para aparecer os produtos
            na mesma página, estamos pegando o resultado do products + resultado próxima tela /* set Product vai pegar o retorno da Http que é os objetos
            e colocar no objeto Product
            response.data pega só a informação do objeto
            mas como no Json da api os objetos estão dentro de um vetor/list nós colocamos o .content no final
            (content é o nome do vetor/lista que criamos  no json) */
            setIsLastPage(response.data.last); /* dentro do http tem um atributo last
            que ele mostra quando é a ultima pagina da pesquisa */  
        })
    }, [queryParams]); /*sempre que mudar productName tem que refazer a consulta do useEffect*/

    function handleSearch(searchText: string) {
        setProducts([]); /* eu vou zerar a lista , para quando eu digitar ele 
        começar denovo na primeria página*/
        setQueryParam({...queryParams, page: 0, name: searchText}) /* o queryParams vai receber oque tinha nele
        ... , page = 0 para quando ele for pequisar zerar a página o nome dele vai receber oque for atualizado na variavel searchText(que puxa do que está sendo
        escrito no input) quando for realizdo uma busca no SearchBar com
        a função onSearch, automaticamente ele vai chamar essa função handleSearch que vai atualizar o
        estado do productName (utilizando o setProductName e atualizar na request do useEffect) com o valor que estiver digitado lá no SearchBar
        que é o argumento (searchText) dessa função handleSearch */
   } 

  /*função carregar mais itens da página */

   function handleNextPageClick() {
        setQueryParam({...queryParams, page: queryParams.page + 1}); /*
        ao clicar no botão, ele ta dizendo que vai receber os produtos que já tinha na página
        ...queryParams + page: queryParama.page + 1, e mais o produto da página seguinte */
   }
    /*como estamos chamando o componente      <HeaderClient /> temos o html todo mais esse compoenente
    como é dois tem que colocar dentro do fragment <>  </*/


    return (

      

        < main >
        <section id="catalog-section" className="dsc-container">
            <SerachBar onSearch={handleSearch}/> 
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
            {
                !isLastPage && /* só vai aparecer quando n for a última página, na
                requisição do http tem um atributo que sinfica last */
            <div onClick={handleNextPageClick}> 
            <ButtonNextPage />
            </div>

}
        </section>
        </main >


    );


}
