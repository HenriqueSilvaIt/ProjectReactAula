import './style.css';
import computerImg from '../../../assets/compute.png';


const cart = {
    items: [
        {
            productId: 4,
            quantity: 1,
            name: "PC Gamer",
            price: 1200,
            imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg"
        },
        {
            productId: 5,
            quantity: 2,
            name: "Rails for Dummies",
            price: 100.99,
            imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg"
        },
        {
            productId: 5,
            quantity: 2,
            name: "Rails for Dummies",
            price: 100.99,
            imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg"
        }
    ]
}

export default function Cart() {

    return (/* quando abrimos chaves dentro do return é uma expressão do react */
        /* no primeiro elemento dentro da função map tem que colocar o key
        que ai pegamos o id do objeto porrque tem que ser um elemento único */
        <main>
            <section  id="cart-container-section" className="dsc-container">
                <div className="dsc-card dsc-mb20">

                    {cart.items.map(item => (

                        <div key={item.productId} className="dsc-cart-item-container dsc-line-bottom">
                            <div className="dsc-cart-item-left">
                                <img src={item.imgUrl} alt={item.name} />
                                <div className="dsc-cart-item-description">
                                    <h3>{item.name}</h3>
                                    <div className="dsc-cart-item-quantity-container">
                                        <div className="dsc-cart-item-quantity-btn">-</div>
                                        <p>{item.quantity}</p>
                                        <div className="dsc-cart-item-quantity-btn">+</div>
                                    </div>
                                </div>
                            </div>
                            <div className="dsc-cart-item-right">R$ {(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                    ))}





                    <div className="dsc-cart-total-container">
                        <h4>Total:</h4>
                        <h3>R$ 1500,00</h3>
                    </div>
                </div>
                <div className="dsc-btn-page-container">

                    <div className="dsc-btn dsc-btn-blue">
                        Finalizar Pedido
                    </div>
                    <div className="dsc-btn dsc-btn-white">
                        Continuar comprando
                    </div>
                </div>
            </section>
        </main>
    );
}