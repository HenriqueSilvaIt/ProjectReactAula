import './styles.css'
import computerImg from '../../assets/compute.png'
import { ProductDTO } from '../../models/product';
import ProductCategory from '../ProductCategory';
import { Link } from 'react-router-dom';

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
                </div>
            </div>
        </Link>
    );
}