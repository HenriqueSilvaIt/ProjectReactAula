import './style.css';
import { useEffect, useState } from 'react';
import * as cartService from '../../../services/cart-services';
import { OrderDTO, OrderItemDTO } from '../../../models/order';

const item1: OrderItemDTO = new OrderItemDTO(
    4, 1, "PC Gamer", 1200, "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg"
)

const item2: OrderItemDTO = new OrderItemDTO(
    5, 1, "Rails for Dummies", 100.99, "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg"
)

export default function Cart() {
    const [cart, setCart] = useState<OrderDTO>(cartService.getCart()); /* já estamos iniciando
    o use state pegando p rimeiro valor que está lá no localStorage */


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