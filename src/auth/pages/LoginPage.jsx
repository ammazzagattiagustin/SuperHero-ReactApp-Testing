import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '..';

export const LoginPage = () => {

    const { login } = useContext(AuthContext)

    const navigate = useNavigate();

    const onLogin = () => {

        const lastPath = localStorage.getItem("lastPath") || "/" // Para recordar la última página visitada

        login("Fernando Herrera");

        navigate(lastPath), {
            replace: true
        }; // El replace evita que la persona pueda regresar al historial anterior
    }

    return (
        <div className='container mt-5 text-center'>
            <h1>Login</h1>
            <hr />

            <button className='btn btn-primary' onClick={onLogin}>
                Login
            </button>
        </div>
    )
}
