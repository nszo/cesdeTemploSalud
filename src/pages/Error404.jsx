import React from 'react';
import './styles/Error404.css'; // Asegúrate de que la ruta al archivo CSS sea correcta

const Error404 = () => {
    return (
        <div className="Error404-container">
            <h1 className="Error404-title">404</h1>
            <p className="Error404-text">Oops! La página que estás buscando no está aquí.</p>
            <a href="/" className="Error404-link">Ir al inicio</a>
        </div>
    );
};

export default Error404;
