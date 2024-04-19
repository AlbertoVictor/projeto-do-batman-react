import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './styles.css'

function Contato() {
    return(
        <>
            <Header />
            <div className="main">
                <h1>Fale conosco</h1>
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
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <label  for='mensagem'>Mensagem</label>
                            <textarea name='mensagem' id='mensagem' rows='6'></textarea>
                        </div>
                        <button>Enviar mensagem</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contato;