import './styles.css'
import SerachBar from '../../../components/SearchBar';
import CatalogCards from '../../../components/CatalogCards';
import ButtonNextPage from '../../../components/ButtonNextPage';

import * as productService from '../../../services/product-services'; /*importando
todas as funções do service, com o apelido productService */

export default function Catalog() {
    /*como estamos chamando o componente      <HeaderClient /> temos o html todo mais esse compoenente
    como é dois tem que colocar dentro do fragment <>  </*/
    return (

       

        < main >
        <section id="catalog-section" className="dsc-container">
            <SerachBar />
            <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">

            {
            productService.findAll().map(
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
