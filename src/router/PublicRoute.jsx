import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth'


export const PublicRoute = ({ children }) => {

    const { logged } = useContext(AuthContext)

    return (!logged)
        ? children
        : <Navigate to="/marvel" /> // si no está autenticado muestro el children, que sería el LoginPage. Caso contrario está autenciado, por lo tanto navega a la página de marvel
}

// El {children} significa que es un HOC
