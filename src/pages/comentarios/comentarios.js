import React from 'react'
import './styles.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import perfil from '../../assets/batman-logo.jpg';


function Comentarios(){
    return (
        <>
            <Header />
            <div className="main">
                <h1>Comentarios</h1>
                <div className="trailer-content">
                    <div className="input-content">
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <label  for='nome'>Nome</label>
                            <input type="text" id="nome" placeholder="seu nome"></input>
                        </div>
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <label  for='email'>Email</label>
                            <input type="email" id="email" name="qualquecoisa" placeholder="seuemail@**mail.com"></input>
                        </div>
                        <div style={{display:'flex', flexDirection:'column'}} >
                            <label  for='numero'>Número</label>
                            <input type="text" id="numero" placeholder="(XX) XXXX-XXXX"></input>
                        </div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <label  for='comentario'>Comentário</label>
                            <textarea name='mensagem' id='mensagem' rows='6'></textarea>
                        </div>
                        <button id='button'>Enviar comentário</button>
                    </div>
                </div>
            </div>
            <div className='comentarios-container'>
                <div className='comentario 01'>
                    <div className='pessoa 01'>
                        <img id='perfil' src={perfil}/>
                        <span>****rtl14</span>
                    </div>
                        <p>Filme da hora muita ação e pancadaria.</p>
                        <p>⭐⭐⭐⭐⭐</p>
                </div>
                <div className='comentario 03'>
                    <div className='pessoa 02'>
                        <img id='perfil' src={perfil}/>
                        <span>Vagner Santos</span>
                    </div>
                        <p>Bom filme parabéns.</p>
                        <p>⭐⭐⭐</p>
                </div>
                <div className='comentario 03'>
                    <div className='pessoa 03'>
                        <img id='perfil' src={perfil}/>
                        <span>Cleitin433</span>
                    </div>
                        <p>Gostei bastante do Filme, muito bolado.</p>
                        <p>⭐⭐⭐⭐</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Comentarios;