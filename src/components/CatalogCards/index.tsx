import './styles.css';
import { ProductDTO } from '../../models/product';
import { Link } from 'react-router-dom';
import { formatDate } from '../../services/product-services';

type Props = {
    product: ProductDTO;
}

export default function CatalogCards({ product }: Props) {
    return ( /* tem que importa o link abaixo */
        <Link to={`/product-details/${product.id}`}> 
            <div className="dsc-card">
                <div className="dsc-catalog-card-top dsc-line-bottom">
                    <img src={product.imgUrl} alt={product.name} />
                </div>
                <div className="dsc-catalog-card-bottom">
                    <h3>R$ {product.price.toFixed(2)}</h3>
                    <h4>{product.name}</h4>

                    <p className="dsc-catalog-product-quantity">{product.quantity}</p>
                    <div className="dsc-catalog-card-date"> 
                   Data de Compra
                   <p>{formatDate(product.dateBuy)}</p>
                   Data de vencimento
                   <p>{formatDate(product.dateBuy)}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}