import { requestBackend } from "../utils/requests";
import * as authService from './auth-service';

/*Busc usuário logado*/

export function findLoggedUser() {



    /* passando o token na autorização na hora do login */
    const headers = {
        Authorization: "Bearer " + authService.getAcessToken()

    }
    /* o preparamos o cabeçalho acima, e vamos passar o cabeçalho já com o token na requisição na url abaixo*/
    console.log(headers);

    return requestBackend({ url: '/users/me', headers });
}