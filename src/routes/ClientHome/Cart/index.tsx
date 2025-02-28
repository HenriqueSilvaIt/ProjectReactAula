import './style.css';
import { useContext, useState } from 'react';
import * as cartService from '../../../services/cart-services';
import { OrderDTO, OrderItemDTO } from '../../../models/order';
import { Link } from 'react-router-dom';
import { ContextCartCount } from '../../../utils/context-cart';

export default function Cart() {
    const [cart, setCart] = useState<OrderDTO>(cartService.getCart()); /* já estamos iniciando
    o use state pegando p rimeiro valor que está lá no localStorage */

    const { setContextCartCount } = useContext(ContextCartCount);

    function handleClearClick() {
        cartService.clearCart(); /* aqui limpa no localstorage */
        updateCart();
    /* a variavel cart no use state vai pegar
        o resultado local storage e atualizar o no vizual, e a função que renderiza o carrinho lá em baixo 
        length === 0 vai atualziar também, porque vai ver que está zerado o carrinho  */
    }

    /* função para acrescentar novo produto no carrinho */
    function handleIncreaseItem(productId: number) {
        cartService.increaseItem(productId); // incrementa o item no local storage
        setCart(cartService.getCart());// atualizar no use state para atualizar no visual

    }

    /* função para remover novo produto no carrinho */
    function handleDecreaseItem(productId: number) {
        cartService.decreaseItem(productId); // incrementa o item no local storage
        updateCart();
       // atualizar no use state para atualizar no visual

    }

    function updateCart() {

        const newCart = cartService.getCart();
        setCart(newCart); 
        setContextCartCount(newCart.items.length);
    }

    return (/* quando abrimos chaves dentro do return é uma expressão do react */
        /* no primeiro elemento dentro da função map tem que colocar o key
        que ai pegamos o id do objeto porrque tem que ser um elemento único */
        <main>
            <section id="cart-container-section" className="dsc-container">
                {
                    cart.items.length === 0
                        ? /* caso a quantidade de itens no carrinho foir 0 */
                        (
                            <div>
                                <h2 className="dsc-section-title dsc-mb20">Seu carrinho está vazio</h2>
                            </div>

                        )
                        : (<div className="dsc-card dsc-mb20">

                            {cart.items.map(item => (

                                <div key={item.productId} className="dsc-cart-item-container dsc-line-bottom">
                                    <div className="dsc-cart-item-left">
                                        <img src={item.imgUrl} alt={item.name} />
                                        <div className="dsc-cart-item-description">
                                            <h3>{item.name}</h3>
                                            <div className="dsc-cart-item-quantity-container">
                                                <div onClick={() => handleDecreaseItem(item.productId)} className="dsc-cart-item-quantity-btn">-</div>
                                                <p>{item.quantity}</p>
                                                <div onClick={() => handleIncreaseItem(item.productId)} className="dsc-cart-item-quantity-btn">+</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dsc-cart-item-right">R$ {(item.subTotal.toFixed(2))}</div>
                                </div>
                            ))
                            }



                            <div className="dsc-cart-total-container">
                                <h4>Total:</h4>
                                <h3>R$ {cart.total.toFixed(2)}</h3>
                            </div>
                        </div>
                        )
                }


                <div className="dsc-btn-page-container">

                    <div className="dsc-btn dsc-btn-blue">
                        Finalizar Pedido
                    </div>
                    <Link to="/catalog">
                        <div className="dsc-btn dsc-btn-white">
                            Continuar comprando
                        </div>
                    </Link>
                    <div onClick={handleClearClick} className="dsc-btn dsc-btn-white">
                        Limpar Carrinho
                    </div>
                </div>

            </section>
        </main>
    );
}