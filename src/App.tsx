

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './routes/ClientHome/Catalog';
import ProductDetails from './routes/ProductDetails';
import ClientHome from './routes/ClientHome';

export default function App() { /*export default quer dizer que estamos exportando e o default quer dizer que desse
  documento só estamos exportando essa função */
  return ( /* esse <> </> é um fragment, sempre que tenho mais de 1 elemento html eu preciso colocar 
    dentro de um fragment, porque eu só posso ter 1 elemento java script de retorno que é um fragment */
/* Por padrão tem que importar
o BrowserRouter, Routes e  Route e por padrão temos que colocar
 a primeira rota como sendo o caminho "/"que é  a rota raiz e no element dela
 você passa a página que você quer colocar como inicial (normalmente colocamos
 o componente dessa página) */
    <BrowserRouter> 
    <Routes> 
      <Route path="/" element={<ClientHome/>}> 
      <Route  index element={<Catalog/>}/>
      <Route path="catalog" element={<Catalog/>}/>
        <Route path="product-details" element={<ProductDetails/>} />
      </Route>
      </Routes>
      </BrowserRouter>
  ); /* o primeiro route é a rota principal
  vamos deixar o cabeçalho na rota mãe e os conteúdo da página vamos deixar
  como subrota da rota do cabeçalho */
}
