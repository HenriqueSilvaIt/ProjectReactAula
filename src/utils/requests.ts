import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";

/* Função onde será concentrada o BASE_URL que é a url da aplicação  e depois também vai ter
a parte de passa o token */
export function requestBackend(config: AxiosRequestConfig) {
    return axios({...config, baseURL: BASE_URL}); /* config do AxiosRequestConfi vai receber ele mesmo
     mais o baseURL, ai no caso lá no serviço do product chamado findPageRequest, não precisa mais
     colocar a varavel do BASE_URL porque já está configurada no config */

}