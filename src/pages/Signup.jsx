import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Signup.css'


function Signup() {
    return (
        <div className='signUp-contentBody'>
            <div className='signUp-cardContent'>
                <span className='signUp-title'>SignUp</span>
                <form className='signUp-form'>
                    <input className='signUp-input' type='text' placeholder='Usuario' />
                    <input className='signUp-input' type='password' placeholder='Contraseña' />
                    <input className='signUp-input' type='email' placeholder='Correo electronico' />
                    <button className='signUp-button' type='submit'>SignUp</button>
                </form>
                <div className="signUp-options">
                    <Link className="signUp-link" to="/forgot-password">Olvidé mi contraseña</Link>
                    <Link className="signUp-link" to="/login">Iniciar sesion</Link>
                    <Link className="signUp-link" to="/">Volver</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup