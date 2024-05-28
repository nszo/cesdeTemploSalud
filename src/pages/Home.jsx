import React from 'react'
import { Link } from 'react-router-dom'
import './styles/home.css'
function Home() {
    return (
        <>
            <div className='header'>
                <p className='header-text' data-aos="fade-down" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur. Varius volutpat bibendum adipiscing adipiscing mauris proin. Amet duis donec nunc convallis nulla ornare morbi tincidunt mattis. Dolor elementum metus neque in etiam eget placerat. Eget dictumst blandit elit risus fringilla mauris mauris risus.     </p>
                <div className='formDecoretion' data-aos="fade-up-right" data-aos-duration="2000">
                    <p className='online24_7'>Online 24/7</p>
                    <img src="./tow_doctors1.svg" alt="imgTow_doctors1" className='imgTow_doctors1' data-aos="fade-left" data-aos-duration="1500" />
                </div>
            </div>

            <div id="about" className='cuerpo-nosotros'>
                <p className='cuerpo-nosotrosp title' >Nosotros</p>
                <p className='cuerpo-nosotrosp description'>Lorem ipsum dolor sit amet consectetur. Varius volutpat bibendum adipiscing adipiscing mauris proin. Amet duis donec nunc convallis nulla ornare morbi tincidunt mattis. Dolor elementum metus neque in etiam eget placerat. Eget dictumst blandit elit risus fringilla mauris mauris risus.</p>
            </div>
            <div id="pqr" className='pqr'>
                <div className='pqrTitle'>PQR</div>
                <div className='pqrDescription'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit modi animi obcaecati consectetur officia, libero illum, nemo perferendis commodi perspiciatis reprehenderit earum voluptatem sint. Numquam voluptatum officia et quibusdam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit modi animi obcaecati consectetur officia, libero illum, nemo perferendis commodi perspiciatis reprehenderit earum voluptatem sint. Numquam voluptatum officia et quibusdam.</p>
                </div>
            </div>
            <footer className="footer">
                <div className="container footer-grid">
                    <div className="footer-section footer-branding">
                        <h2>Templo<span className="highlight">Salud</span></h2>
                        <p>Servicios médicos confiables y atención de primera. Estamos aquí para ti, 24/7.</p>
                    </div>
                    <div className="footer-section footer-links">
                        <h2>Enlaces Rápidos</h2>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/about">Acerca de</Link></li>
                            <li><Link to="/pqr">PQR</Link></li>
                            <li><Link to="/login">Iniciar sesión</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section footer-socials">
                        <h3>Redes Sociales</h3> {/* Subtítulo agregado */}
                        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    </div>

                    <div className="footer-section footer-contact">
                        <span><i className="fas fa-phone"></i> 123-456-789</span>
                        <span><i className="fas fa-envelope"></i> info@miclinica.com</span>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; {new Date().getFullYear()} Mi Clínica. Todos los derechos reservados. (Walter Gabriel, Mercedes, Andres muñoz)
                </div>
            </footer>


        </>
    )
}

export default Home