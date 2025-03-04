import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import * as authService from './auth-service';

/*Busc usuário logado*/

export function findLoggedUser() {

    const config: AxiosRequestConfig = {
        url: '/users/me',
        withCredentials: false
    }

 

        return requestBackend(config);

/* o preparamos o cabeçalho acima, e vamos passar o cabeçalho já com o token na requisição na url abaixo*/


}