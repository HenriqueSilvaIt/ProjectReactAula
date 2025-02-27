
import * as cartRepository from '../localstorage/cart-repository';
import { OrderDTO } from '../models/order';

export function saveCart(cart: OrderDTO) {
    cartRepository.save(cart);
}


/*função para retorna um objeto */
export function getCart() : OrderDTO{
    return cartRepository.get();
}