import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";
import * as authService from '../services/auth-service';
/* Função onde será concentrada o BASE_URL que é a url da aplicação  e depois também vai ter
a parte de passa o token */
export function requestBackend(config: AxiosRequestConfig) {



    /* passando o token na autorização na hora do login */
    const headers = config.withCredentials
        ? {
            ...config.headers,
            Authorization: "Bearer " + authService.getAcessToken()
        }
        :
        config.headers;


    return axios({ ...config, baseURL: BASE_URL, headers }); /* config do AxiosRequestConfi vai receber ele mesmo
     mais o baseURL, ai no caso lá no serviço do product chamado findPageRequest, não precisa mais
     colocar a varavel do BASE_URL porque já está configurada no config, é só chamar o requestBackend dentro
     do product-service.t*/

}


// REQUEST INTERCEPTOR
axios.interceptors.request.use(
    function (config) {
        /* DO SOMETHING BEFORE REQUEST IS SENT (Antes da requisição ser enviada,
        coloque o código aqui e deixe o return config em baixo) */
        return config;
    },
    function (error) {
        /* DO SOMETHING WITH REQUEST ERROR (faz alguma coisa com erro de requisição
        coloque seu código e deixe o return abaixo)*/
        return Promise.reject(error);
    }
);

//Response Inteceptor

axios.interceptors.response.use(
    function (response) {
        // Do Somethin wit response data if status is 2x, faz algo com os dados da resposta se o retorno é OK
        // 200 e ALGUMA COISA
        return response;
    },
    function (error) {
        // Do something with response error, faz alguma coisa com o erro da resposta
        if ( error.response.status === 401){
            console.log("Deu 401!");
        }
        if ( error.response.status === 403) {
            console.log("Deu 404");
        }
        return Promise.reject(error);
    }
);