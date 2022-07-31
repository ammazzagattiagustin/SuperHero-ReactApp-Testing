import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth'


export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthContext)

    const { pathname, search } = useLocation(); // Para recordar la última página visitada

    const lastPath = pathname + search; // Para recordar la última página visitada
    localStorage.setItem("lastPath", lastPath); // Para recordar la última página visitada

    return (logged)
        ? children
        : <Navigate to="/login" /> // si está autenticado muestro el children, que sería HeroesRoutes. Caso contrario, es decir, no está autenticado, navega a la página del login
}

// El {children} significa que es un HOC