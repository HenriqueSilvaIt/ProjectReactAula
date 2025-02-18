import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondy from "../../components/ButtonSecondy";
import HeaderClient from "../../components/header-client";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import './styeles.css'

export default function ProductDetails() {
    return (
        <>
            <HeaderClient />
            <main>
                <section id="product-details-section" className="dsc-container">
                    <ProductDetailsCard />
                    <div className="dsc-btn-page-container">
                        <ButtonPrimary />
                        <ButtonSecondy />
                    </div>
                </section>
            </main>
        </>
    );
   
}