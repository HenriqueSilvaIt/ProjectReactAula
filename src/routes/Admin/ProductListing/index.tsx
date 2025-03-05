
import deleteImg from '../../../assets/delete.svg';
import editIm from '../../../assets/edit.svg';
import computerIm from '../../../assets/compute.png';
import './style.css';
import * as productService from '../../../services/product-services';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';

type QueryParams = {
    page: number,
    name: string;
}

export default function ProductListing() {

    const [isLastPage, setIsLastPage] = useState(false);

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParams] = useState<QueryParams>({
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

    return (
        <main>
            <section id="product-listing-section" className="dsc-container">
                <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>
                <div className="dsc-btn-page-container dsc-mb20">
                    <div className="dsc-btn dsc-btn-white">
                        Novo
                    </div>
                </div>
                <form className="dsc-search-bar">
                    <button type="submit">🔎︎</button>
                    <input type="text" placeholder="Nome do produto" />
                    <button type="reset">🗙</button>
                </form>

                <table className="dsc-table dsc-mb20 dsc-mt20">
                    <thead>
                        <th className="dsc-tb576">Id</th>
                        <th></th>
                        <th className="dsc-tb768">Preço</th>
                        <th className="dsc-text-left">Nome</th>
                        <th></th>
                        <th></th>
                    </thead>
                    <tbody>
                        {
                            products.map(product => (
                                <tr>
                                    <td className="dsc-tb576">{product.id}</td>
                                    <td>
                                        <img
                                            className="dsc-product-listing-image"
                                            src={product.imgUrl}
                                            alt={product.name}
                                        />
                                    </td>
                                    <td className="dsc-tb768">R$ {product.price.toFixed(2)}</td>
                                    <td className="dsc-text-left">{product.name}</td>
                                    <td>
                                        <img
                                            className="dsc-product-listing-btn"
                                            src={editIm}
                                            alt="edi"
                                        />
                                    </td>
                                    <td>
                                        <img
                                            className="dsc-product-listing-btn"
                                            src={deleteImg}
                                            alt="delet"
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="dsc-btn-next-page">Carregar mais</div>
            </section>
        </main>
    );
} 