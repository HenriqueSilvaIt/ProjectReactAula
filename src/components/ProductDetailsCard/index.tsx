import computerImg from '../../assets/compute.png'
import './styles.css'
import ProductCategory from '../ProductCategory';

export default function ProductDetailsCard() {
    return (
        <div className="dsc-card dsc-mb20">
            <div className="dsc-product-details-top dsc-line-bottom">
                <img src={computerImg} alt="Computer" />
            </div>
            <div className="dsc-product-details-bottom">
                <h3>R$ 5000,00</h3>
                <h4>Computador Gamer XT</h4>
                <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                    aliquam neque incidunt aperiam, magnam dolorum et, facere officiis
                    ad iste accusantium ipsam impedit nesciunt delectus obcaecati
                    nihil, assumenda natus sint?
                </p>
                <div className="dsc-category-container">
                    <ProductCategory/>
                    <ProductCategory/>    
                </div>
            </div>
        </div>
    );
}