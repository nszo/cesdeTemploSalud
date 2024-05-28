import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importar useLocation
import './Styles/NavBar.css'; // Asegúrate de que la ruta coincide con tu estructura de archivos

function NavBar() {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation(); // Obtener la ubicación actual

    // No renderizar el NavBar en la página de login o en cualquier página de error 404
    const shouldHideNavBar = location.pathname === '/login' || !['/', '/login', '/signup', '/pagina'].includes(location.pathname);

    if (shouldHideNavBar) {
        return null;
    }
    return (
        <nav className="navBar-content">
            <div className="navBar-titleLogo">
                <span className="navBar-titleTemplo">Templo </span>
                <span className="navBar-titleSalud">Salud</span>
            </div>
            <div className={`navBar-hamburger-menu ${isActive ? 'black' : 'white'}`} onClick={() => setIsActive(!isActive)}>
                ☰
            </div>
            <ul className={`navBar-underList ${isActive ? 'active' : ''}`}>
                {isActive && (
                    <div className="navBar-titleLogo">
                        <span className="navBar-titleTemplo">Templo </span>
                        <span className="navBar-titleSalud">Salud</span>
                    </div>
                )}
                <li><Link to="/" className="navBar-toLink" onClick={() => setIsActive(false)}>HOME</Link></li>
                <li><Link to="/login" className="navBar-toLink" onClick={() => setIsActive(false)}>LOGIN</Link></li>
                <li><Link to="/Signup" className="navBar-toLink" onClick={() => setIsActive(false)}>SIGNUP</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
