import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import React from 'react';
import '../../src/style/Pages/contact/_page.scss'

export default function Contact() {
    return (
        <main className="contact">
            <Header />
            <div className="backgroundImage">
                <div className="titleContentHome">
                    <div className="titleHome">
                        <h1>Contactez nous</h1>
                    </div>
                    <div className="descriptionContentHome">
                        <p>Un question ? un besoin ?</p>
                        <p>c'est ici !</p>
                    </div>
                </div>
            </div>

            <div className="titleContact">
                <p>NOUS TROUVER</p>
                <div className="decorationTextBar"> </div>
            </div>
            <Footer />
        </main>
    );
}