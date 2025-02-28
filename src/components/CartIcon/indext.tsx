import cartIcon from '../../assets/cart.svg';
import './style.css';
import * as cartService from '../../services/cart-services';
import { useState } from 'react';


export default function CartIcon() {
    

    const [cart, setCart] = useState(cartService.getCart()); /* esse useState tem vai conter o número do
    itens de carrinho, vamos pegar com o service getCart, colocando direto dentro do useState
    a variavel do useState já começa com esse valor, precisa de um contextAPi para ele atualizar realmente o número
    na variavel cart, se n ele vai atualizar só se recarregar a página*/

    return(
       <> 
       <div className="dsc-menu-cart"> 
        <img src={cartIcon} alt="car" />
        <div className="dsc-cart-count">{cart.items.length}</div>
        </div>
        </>
  /* cart.items.length pega quandidade de itens do carrinho */
    )
}