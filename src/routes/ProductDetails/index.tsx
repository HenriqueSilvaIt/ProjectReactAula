import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondy from "../../components/ButtonSecondy";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import './styeles.css'
import * as productSerivce from '../../services/product-services';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";




export default function ProductDetails() {


    
/*fazendo o reactRouter dom pegar o Id que colocarmos na rota(url) */
    
const params = useParams(); /* vamos utilizar esse objeto padrão
use params para ler o parâmetro que está sendo passado na rota(url)
como colocamos o nome do parâmetro no app.tsx de productid para rota do product-details
vamos colocar esse mesmo nome dentro do findbyId, passando params.productId
com isso estamos dizendo que o parâmetro da rota é o que tiver digitado lá */

const product = productSerivce.findById(Number(params.productId)); /* ele ta 
reclamando, porque o findById nós colocamos lá nos services que ele espera um number,
mais importe é saber que TUDo no protcolo HTTP é tudo string( então o params do useParams
por padrão é string), com isso vamos mudar de 
(params.productId) para (Number(params.productId) para converter para número */

    return (

        <main>
            <section id="product-details-section" className="dsc-container">
                {
                    /*Renderização condicional do product
                    para o compilador n achar que ele pode ser undefined
            fazend product && 
            , se n for undefinied ai sim o compilador pode
            redenderizar(mostrar na tela) ele já verifica
            se existe algo no product Estamos testando se o product exist
             */
                    product &&
                            <ProductDetailsCard product={product} />
                }
        
                <div className="dsc-btn-page-container">
                    <ButtonPrimary text="Comprar" />
                    <Link to="/"> 
                    <ButtonSecondy text="Início" />
                    </Link>
                </div>
            </section>
        </main>
    );

}