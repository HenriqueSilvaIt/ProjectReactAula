import { OrderDTO } from "../models/order";

    import { CART_KEY } from "../utils/system";

/* não vai ser default porque vamos exportar mais de uma função */
export function save(cart: OrderDTO) { /* tem que importa o objeto OrderDt*/
    const obj = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, obj);/*padrão do nome da class emp,projeto, nome do objeto*/
}

/*método utilziado para buscar do local storage */

export function get(): OrderDTO {
    const obj = localStorage.getItem(CART_KEY) || '{"items"=[]}';
    return JSON.parse(obj);
}