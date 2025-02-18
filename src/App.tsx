
import './App.css'
import HeaderClient from './components/header-client';
import ButtonPrimary from './components/ButtonPrimary';
import ButtonSecondy from './components/ButtonSecondy';
import ProductDetailsCard from './components/ProductDetailsCard';

export default function App() { /*export default quer dizer que estamos exportando e o default quer dizer que desse
  documento só estamos exportando essa função */
  return ( /* esse <> </> é um fragment, sempre que tenho mais de 1 elemento html eu preciso colocar 
    dentro de um fragment, porque eu só posso ter 1 elemento java script de retorno que é um fragment */
    <> 
        <HeaderClient/> 
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard/>
          <div className="dsc-btn-page-container">
            <ButtonPrimary/>
            <ButtonSecondy/>
          </div>
        </section>
      </main>
    </>
  );
}
