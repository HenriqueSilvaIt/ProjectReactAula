import QueryString from "qs";
import { CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET} from "../utils/system";


export function loginRequest(loginData: CredentialsDTO) {

    /*Cabelaçhos da requisição, tem que ficar igual no postman que testamo no backend */
    const headers  = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic" + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)

        /* O algoritmo Base64.encode  do java script é o window.btoa mós colocamos depois do basic */
    }

    const requestBody = QueryString.stringify({...loginData, grant_type: "password"}); /*stringfy converte para texto
    tem que importa o QueryString*/

    console.log(requestBody);
}