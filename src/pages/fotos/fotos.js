import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './styles.css';

function Fotos() {
    return(
        <>
            <Header />
            <section>
                <h1>Fotos</h1>
                <div id="cards">
                    <div class="cardi banner-01"></div>
                    <div class="cardi banner-02"></div>
                    <div class="cardi banner-03"></div>
                    <div class="cardi banner-04"></div>
                    <div class="cardi banner-05"></div>
                    <div class="cardi banner-06"></div>
                    <div class="cardi banner-07"></div>
                    <div class="cardi banner-08"></div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Fotos;