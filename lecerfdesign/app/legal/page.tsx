import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import React from 'react';
import '../../src/style/Pages/legal/_page.scss';

const legal = () => {

    const informationLegal = {
        NumeroSiret : 425136548,
        emailPro : "lecerf-design@gmail.com",
        EmailSEA : "barthouxw9@gmail.com",
        SiteSEA : "noble-site.fr",
    }

    return (
        <div className="legal">
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
                    <p>Killian Lecorf - Développeur</p>
                    <h2>Photographie</h2>
                    <p>STUDIO LE 63 - studio photo-vidéo</p>
                    <p>06 85 58 34 90 - andreroques@gmail.com</p>
                    <p>normandie-p  hoto.com</p>
                    <p style={{color: "var(--Main-color)", marginTop: "25px"}}>Droits de propriété intellectuelle</p>
                    <div className="textDecorationBar"> </div>
                    <p>Le site Web est protégé par les droits de propriété intellectuelle et est la propriété exclusive de LECERF DESIGN. La conception, le graphisme, le contenu, l&apos;organisation de ce site sont des œuvres originales et sont l&apos;entière propriété de la LECERF DESIGN. Toute reproduction, ou démarquage, total ou partiel, fait sans le consentement de l&apos;auteur, ou de ses ayants droit, ou de ses ayants cause est illicite. Il en est de même pour la traduction, l&apos;adaptation, l&apos;arrangement par quelque procédé que ce soit (Loi 57298 du 11 mars 1957).</p>
                    <p style={{color: "var(--Main-color)", marginTop: "25px"}}>Liens hypertextes avec des sites tiers</p>
                    <div className="textDecorationBar"> </div>
                    <p>LECERF DESIGN n&apos;exerce aucun contrôle sur le contenu des sites tiers. L&apos;existence d&apos;un lien hypertexte entre ce site et un site tiers ne signifie en aucune manière le contrôle du contenu du site tiers par LECERF DESIGN.</p>
                    <p style={{color: "var(--Main-color)", marginTop: "25px"}}>Exonération de responsabilité</p>
                    <div className="textDecorationBar"> </div>
                    <p>Il appartient à l&apos;utilisateur de ce site de prendre toutes les mesures appropriées de façon à protéger ses propres données et/ou logiciels de contamination par d&apos;éventuels virus circulant sur le réseau Internet.</p>
                    <p style={{color: "var(--Main-color)", marginTop: "25px"}}>Modification du site</p>
                    <div className="textDecorationBar"> </div>
                    <p>LECERF DESIGN se réserve le droit de modifier ou de corriger le contenu de ce site et cette mention légale à tout moment et ceci sans préavis.</p>
                    <p style={{color: "var(--Main-color)", marginTop: "25px"}}>Données collectées</p>
                    <div className="textDecorationBar"> </div>
                    <p>Données collectées :  version du navigateur, version du système d&apos;exploitation, taille de l&apos;écran, type du périphérique, heure et date de la visite, clics, référent. L&apos;adresse IP est anonymisée conformément aux recommandations de la RGPD.</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default legal;