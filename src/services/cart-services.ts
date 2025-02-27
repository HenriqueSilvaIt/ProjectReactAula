
import * as cartRepository from '../localstorage/cart-repository';
import { OrderDTO, OrderItemDTO } from '../models/order';
import { ProductDTO } from '../models/product';

export function saveCart(cart: OrderDTO) {
    cartRepository.save(cart);
}


/*função para retorna um objeto */
export function getCart() : OrderDTO{
    return cartRepository.get();
}

/* Adionar produto ao carrinho */

export function addProduct(product: ProductDTO) {
    const cart = cartRepository.get();
    /* buscando dentro dos itens do carrinho se já existe um item do carrinho que to colocando*/
    const item = cart.items.find(x => x.productId === product.id);
    /* caso o item não existir vamos adicionar ele */
    if ( !item) {
        /*istanciando order item dto*/
        const newItem = new OrderItemDTO(product.id, 1, product.name, product.price, product.imgUrl);
        /* colocando  item no objeto product*/
        cart.items.push(newItem);
        /*salvando no local storage */
        cartRepository.save(cart);
    }
}

export function clearCart() {
    cartRepository.clear(); /*pega a função do repository de limpar o carrinho*/
}

export function increaseItem(productId: number) {
    const cart = cartRepository.get(); // PEGANDO o cart do localStorage;
    const item = cart.items.find(x => x.productId === productId); //ele vai tentar encontrar o item
    if (item) {// se encontrar o item
        item.quantity ++; // incrementar o item que tem mais 1  pode user também o ++
        /* SALVA no local storage*/
        cartRepository.save(cart);  
    }
}