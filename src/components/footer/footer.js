import React from 'react';
import './styles.css';
import logo from '../../assets/batman-logo.jpg';
import { Link } from "react-router-dom";

function Footer() {
    return(
        <footer>
            <img style={{objectFit: 'contain'}} id='logo' src={logo}/>
            <span>Todos os direitos reservados©</span>
            <span>Desenvolvido por: Alberto Victor</span>
            <nav class="footer-navigation">
                <ul class="footer-list">
                    <Link style={{textDecoration: 'none'}} to='/'>
                    <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={'/contato'}>
                    <li>Contato</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={'/fotos'}>
                    <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}}to={'/comentarios'}
                    >
                    <li>Comentarios</li>
                    </Link>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;