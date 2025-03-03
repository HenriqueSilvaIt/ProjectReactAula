import QueryString from "qs";
import { CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET, TOKEN_KEy} from "../utils/system";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import * as acessTokenRepository from '../localstorage/acess-token-repository'

export function loginRequest(loginData: CredentialsDTO) {

    /*Cabelaçhos da requisição, tem que ficar igual no postman que testamo no backend */
    const headers  = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)

        /* O algoritmo Base64.encode  do java script é o window.btoa mós colocamos depois do basic */
    }

    const requestBody = QueryString.stringify({...loginData, grant_type: "password"}); /*stringfy converte para texto
    tem que importa o QueryString*/

    /* Requisição oque parametros */
    const config : AxiosRequestConfig = {
    method: "POST",
    url: "/oauth/token",
    data: requestBody, /*corpo no Axios é o data */
    headers /*cabeçalho da requisição, quando o valor tem o mesmo nome do atributo só colocar
     uma vez o nome n precisa colocar 2 */
    }

   return requestBackend(config);
}

/* função para realizar logout, ou seja limpa o token do local storage */
export function logout() {
    acessTokenRepository.remove(); /* n passamos o local storage aqui direto
    para remover, porque na pdronização que estamos fazendo o localstorage repository é a camada
    que chamada os dados do localstorage e aqui  chamamos o serviço do repository */
}

export function saveAcessToken(token: string) {

    acessTokenRepository.save(token);

}

export function getAcessToken() {
   return  acessTokenRepository.get(); /* tem que ter o return porque ele  vai retorna o token*/
}