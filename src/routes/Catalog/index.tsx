import './styles.css'
import HeaderClient from '../../components/header-client';
import SerachBar from '../../components/SearchBar';
import CatalogCards from '../../components/CatalogCards';
import ButtonNextPage from '../../components/ButtonNextPage';

export default function Catalog() {
    /*como estamos chamando o componente      <HeaderClient /> temos o html todo mais esse compoenente
    como é dois tem que colocar dentro do fragment <>  </*/
    return (
        <>
            <HeaderClient />
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SerachBar />
                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        <CatalogCards />
                        <CatalogCards />
                        <CatalogCards />
                        <CatalogCards />
                        <CatalogCards />
                        <CatalogCards />
                        <CatalogCards />
                        <CatalogCards />
                        <CatalogCards />
                        <CatalogCards />
                        <CatalogCards />
                    </div>
                    <ButtonNextPage/>
                </section>
            </main>

        </>
    );


}
