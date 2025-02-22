import './styles.css'
import SerachBar from '../../../components/SearchBar';
import CatalogCards from '../../../components/CatalogCards';
import ButtonNextPage from '../../../components/ButtonNextPage';
import { ProductDTO } from '../../../models/product';

const product: ProductDTO = {
    id: 2,
    name: "Smart Tv",
    description: "Esta Tv é muito bonit",
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/refs/heads/master/backend/img/2-big.jpg",
    price: 2500.99,
    categories: [
        {
            id: 2,
            name: "Eletrônics"
        },
        {
            id: 3,
            name: "Computadores"
        },
        {
            id: 4,
            name: "Importado"
        }
    ]
}

export default function Catalog() {
    /*como estamos chamando o componente      <HeaderClient /> temos o html todo mais esse compoenente
    como é dois tem que colocar dentro do fragment <>  </*/
    return (

        <main>
            <section id="catalog-section" className="dsc-container">
                <SerachBar />
                <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                    <CatalogCards product={product} />
                    <CatalogCards product={product} />
                    <CatalogCards product={product} />
                    <CatalogCards product={product} />
                    <CatalogCards product={product} />
                    <CatalogCards product={product} />
                    <CatalogCards product={product} />
                    <CatalogCards product={product} />
                    <CatalogCards product={product} />
                    <CatalogCards product={product} />
                    <CatalogCards product={product} />
                </div>
                <ButtonNextPage />
            </section>
        </main>


    );


}
