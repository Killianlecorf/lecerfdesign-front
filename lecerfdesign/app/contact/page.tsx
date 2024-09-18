import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import React from 'react';
import '../../src/style/Pages/contact/_page.scss';
import FormContact from '@/Components/FormContact/FormContact';
import Head from 'next/head';

export default function Contact() {
    return (
        <main className="contact">
            <Head>
                <title>Lecerf design | Créations</title>
                <meta name="description" content="Donnez vie à votre vision, avec des solutions graphiques sur mesure !" />
                <meta name="keywords" content="Design, Rouen, lecerf" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
            </Head>
            <Header />
            <div className="backgroundImage">
                <div className="titleContentHome">
                    <div className="titleHome">
                        <h1>Contactez nous</h1>
                    </div>
                    <div className="descriptionContentHome">
                        <p>Un question ? un besoin ?</p>
                        <p>c&apos;est ici !</p>
                    </div>
                </div>
            </div>

            <div className="titleContact">
                <p>NOUS TROUVER</p>
                <div className="decorationTextBar"> </div>
            </div>
            <FormContact />
            <Footer />
        </main>
    );
}