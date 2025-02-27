
// Aqui vai ser um código que terá funcionalidades de négocio relacionadas ao produto

import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";

/* retorna todos os produtos */

export function findPageRequest(page: number, name: string, size = 12, sort = "name") { /* 1º argumento número da página, 2º nome
    do produto, 3º qtd de produto na página        */
    const config : AxiosRequestConfig = { 
        method: "GET",
        baseURL: BASE_URL, 
        url: "/products",
        params: {
            page: page,
            name: name,
            size: size,
            sort: sort

        }
    }
    /*return axios.get(`${BASE_URL}/products/?size=12`); /*tem que importa o axios */

return axios(config);

}

/* retorna o produto pelo id usando método find do java script */

export function findById(id: number) {
    return  axios.get(`${BASE_URL}/products/${id}`);  /*
    // agora aqui o product service pega o id do produto do backend
    // então o número que eu setar quando clicar no produto específco que tem seu id, ele vai
    // buscar no backend e exibir na tela 
    // tem que converter o id para number */

}

export function findByBarCode(code:string) {
    return axios.get(`${BASE_URL}/products/?barCode=${code}`);
}
