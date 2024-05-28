import React from 'react';
import { Link } from 'react-router-dom';
import './styles/login.css'; // Asegúrate de que la ruta a tu archivo CSS sea correcta

function Login() {
    return (
        <div className='login-contentBody'>
            <div className='login-cardContent'>
                <span className='login-title'>Login</span>
                <form className='login-form'>
                    <input className='login-input' type='text' placeholder='Username' />
                    <input className='login-input' type='password' placeholder='Password' />
                    <button className='login-button' type='submit'>Login</button>
                </form>
                <div className="login-options">
                    <Link className="login-link" to="/forgot-password">Olvidé mi contraseña</Link>
                    <Link className="login-link" to="/signup">Registrarse</Link>
                    <Link className="login-link" to="/">Volver</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
