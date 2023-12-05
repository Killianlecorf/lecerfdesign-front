import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import React from 'react';
import "../../src/style/Pages/legal/_page.scss";

const legal = () => {

    const informationLegal = {
        NumeroSiret : 425136548,
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
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default legal;