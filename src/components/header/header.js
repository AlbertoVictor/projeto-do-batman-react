import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './style.css'
import logo from '../../assets/batman-logo.jpg';

function Header() {
    return(
        <header>
            <img id='logo' src={logo} />
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none' }} to='/'>
                    <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/contato'>
                    <li>Contatos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/fotos'>
                    <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/comentarios'>
                    <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;