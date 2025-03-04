
import { Navigate } from "react-router-dom";
import * as authService from '../../services/auth-service';
import { JSX } from "react";


type Props = {
    children: JSX.Element;
}

/*  Componente PrivateRoute (Faz o direcionamento em nível de rota, sem precisar passar pelo backend) */

export function PrivateRoute({ children }: Props) { /* o children é a mesma coisa que 
    as rota filh */
    if (!authService.isAuthenticated()) { /* se não tiver autenticado retorna para o login, se tiver retorna a rota ou componente que está dentro do private
        route */
        return <Navigate to="/login" />;

    }
    return children;
}