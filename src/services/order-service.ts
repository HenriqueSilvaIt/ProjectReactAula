import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";


export function findByIdRequest(id: number) {
    
    const config : AxiosRequestConfig = {
        url: `/orders/${id}`,
        withCredentials: true /*precisa de autorização token para acesasr essa página ur
        isso é configurado no backend*/
    }

    return requestBackend(config);
}