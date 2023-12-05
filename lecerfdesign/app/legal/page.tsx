import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import React from 'react';
import "../../src/style/Pages/legal/_page.scss";

const legal = () => {

    const informationLegal = {
        NumeroSiret : 425136548,
        emailPro : "lecerf-design@gmail.com",
        NumeroSEA : "06 00 00 00 00",
        EmailSEA : "barthouxw9@gmail.com",
        SiteSEA : "noble-site.fr",
    }

    return (
        <div className='legal'>
            <Header/>
            <div className="titleLegal">
                <h1>Mentions légales</h1>
            </div>
            <div className="legalMentionContent">
                <div className="legalContent">
                    <p style={{color: "var(--Main-color)"}}>Publication</p>
                    <div className="textDecorationBar"> </div>
                    <p>le site est éditer par :</p>
                    <p>LECERF DESIGN</p>
                    <p>N° de siret : {informationLegal.NumeroSiret}</p>
                    <h2>Design</h2>
                    <p>LECERF DESIGN - Graphiste</p>
                    <p>06 16 63  07 49 - {informationLegal.emailPro}</p>
                    <h2>Développement</h2>
                    <p>O'ZOO - Développeur indépandant</p>
                    <p>06 18 68 57 23 - o-zoo@gmail.com</p>
                    <p>O-zoo.fr</p>
                    <h2>SEA</h2>
                    <p>NOBLE SITE - Consultant SEA</p>
                    <p>{informationLegal.NumeroSEA} - {informationLegal.EmailSEA}</p>
                    <p>{informationLegal.SiteSEA}</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default legal;