import React, { useState, useEffect } from 'react';
import './styles/pagina.css';
import data from '../data/dataCards.json'; // Importa los datos del archivo JSON

function Tarjeta({ titulo, descripcion, suscriptores }) {
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        if (suscriptores === 30) {
            setMensaje('¡Hemos llegado a 30 suscriptores!');
        } else if (suscriptores === 40) {
            setMensaje('¡Hemos alcanzado los 40 suscriptores!');
        } else {
            setMensaje('');
        }
    }, [suscriptores]);

    return (

        <div className='paginaCard-ContentCard'>
            <span className="paginaCard-Title">{titulo}</span>
            <span className="paginaCard-Descripcion">{descripcion}</span>
            <span className='paginaCard-totalSuscriptores'>Total de suscriptores: {suscriptores}</span>
            <button onClick={() => setCantidadSuscriptores(suscriptores + 1)}>Suscribirse</button>
            {mensaje !== '' && (
                <div className='paginaCardMensajeSuscriptores'>
                    <span>{mensaje}</span>
                </div>
            )}
        </div>
    );
}

function Pagina() {
    return (
        <div className="paginaCard-SectionCard">
            <div className='paginaCard-Cuerpo'>
                {data.map(item => (
                    <Tarjeta
                        key={item.id}
                        titulo={item.titulo}
                        descripcion={item.descripcion}
                        suscriptores={item.suscriptores}
                    />
                ))}
            </div>
        </div>
    );
}

export default Pagina;
