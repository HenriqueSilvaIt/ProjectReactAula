

import Catalog from './routes/Catalog';
import ProductDetails from './routes/ProductDetails';

export default function App() { /*export default quer dizer que estamos exportando e o default quer dizer que desse
  documento só estamos exportando essa função */
  return ( /* esse <> </> é um fragment, sempre que tenho mais de 1 elemento html eu preciso colocar 
    dentro de um fragment, porque eu só posso ter 1 elemento java script de retorno que é um fragment */
  <ProductDetails/>

  );
}
