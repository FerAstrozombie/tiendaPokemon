import React from 'react'
import logo from '../../logo.png';
import "./styles.css";


const Footer = () => {
    return (
        <footer className='flexPadre'>
            <div className='flexFooter'>
                <img className='logoFooter' src={logo} alt="" />
                <h5 className='copyrigth'>© Pagina realizada por FerAstrozombie ©</h5>
            </div>
            <div className='flexRedes'>
                <div className='flexParrafo'>
                    <img className='tamañoLogo' src="../../imagenes/facebook.svg" alt="logo facebook" />
                    <p>Facebook</p>
                </div>
                <div className='flexParrafo'>
                    <img className='tamañoLogo' src="../../imagenes/instagram.svg" alt="logo instagram" />
                    <p>Instagram</p>
                </div>
                <div className='flexParrafo'>
                    <img className='tamañoLogo' src="../../imagenes/mail.svg" alt="logo mail" />
                    <p>Mail</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer