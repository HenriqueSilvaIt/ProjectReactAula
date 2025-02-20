import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondy from "../../components/ButtonSecondy";
import HeaderClient from "../../components/header-client";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from "../../models/product";
import './styeles.css'

const product: ProductDTO = {
    id: 2,
    name: "Smart Tv",
    description: "Tv e bonita",
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/refs/heads/master/backend/img/2-big.jpg",
    price: 2500.99,
    categories: [
        {
            id: 2,
            name: "Eletronicos"
        },
        {
            id: 3,
            name: "Computadores"
        },
        {
            id: 4,
            name: "Beauty"
        }
    ]
}

export default function ProductDetails() {
    return (
        <>
            <HeaderClient />
            <main>
                <section id="product-details-section" className="dsc-container">
                    <ProductDetailsCard product={product}/>
                    <div className="dsc-btn-page-container">
                        <ButtonPrimary />
                        <ButtonSecondy />
                    </div>
                </section>
            </main>
        </>
    );
   
}