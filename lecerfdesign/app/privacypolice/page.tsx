import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import React from 'react';
import '../../src/style/Pages/privacyPolice/_page.scss'

const privacyPolice = () => {
    return (
        <div className='privacyPolice'>
            <Header/>
                <div className="titlePrivacyPolice">
                    <h1>Politique de confidentialité</h1>
                </div>
                <div className="privacyPoliceMentionContent">
                    <div className="privacyPoliceContent">
                        <p style={{color: "var(--Main-color)"}}>Notre politique</p>
                        <div className="textDecorationBar"> </div>
                        <p style={{marginBottom: "20px", fontFamily : "var(--Light-font)"}}>Révisée le 17 décembre 2022</p>
                        <p style={{marginBottom: "20px"}}>La présente Politique de confidentialité décrit la façon dont vos informations personnelles sont recueillies, utilisées et partagées lorsque vous vous rendez sur https://www.lecerfdesign.com/ (le « Site ») ou que vous y effectuez une demande de contact.</p>
                        <p style={{color: "var(--Main-color)", marginTop: "100px"}}>INFORMATIONS PERSONNELLES RECUEILLIES</p>
                        <div className="textDecorationBar"> </div>
                        <p>Lorsque vous vous rendez sur le Site, nous recueillons automatiquement certaines informations concernant votre appareil, notamment des informations sur votre navigateur web, votre fuseau horaire, votre système d'exploitation. En outre, lorsque vous parcourez le Site, nous recueillons des informations sur les pages web individuelless que vous consultez, les sites web ou les termes de recherche qui vous ont permis d'arriver sur le Site, ainsi que des informations sur la manière dont vous interagissez avec le Site. Nous désignons ces informations collectées automatiquement sous l'appellation « Informations sur l'appareil ».</p>
                        <p style={{margin: '20px 0 20px 0 '}}>Nous recueillons les Informations sur l'appareil à l'aide des technologies suivantes</p>
                        <p>Les « fichiers journaux » suivent l'activité du Site et recueillent des données telles que votre adresse IP, le type de navigateur que vous utilisez, votre fournisseur d'accès Internet, vos pages référentes et de sortie, et vos données d'horodatage (date et heure). Ces fichiers journaux ne sont pas exploités à des fins de traçage ni de ciblage publicitaire et ne sont pas distribués à des tiers. Enfin nous pouvons être amenés à analyser le parcours utilisateur mené sur Le Site afin d'améliorer votre expérience utilisateur, à l'aide d'une solution auto-hébergée de OpenRelay. Ces données ne sont ni confiées, ni revendues à des tiers et ne sont pas utilisées à des fins de ciblage publicitaire. Les données saisies dans le cadre de votre demande de contact sont anonymisées à cette étape.
                        Par ailleurs, lorsque vous effectuez ou tentez d'effectuer une demande de contact par le biais du Site, nous recueillons certaines informations vous concernant, notamment votre nom, votre adresse courriel et votre numéro de téléphone. Ces informations collectées automatiquement sont désignées par l’appellation « Informations sur la demande de contact ».</p>
                        <p style={{marginTop:"20px"}}>Pour nous protéger du spam et des robots nous utilisons <span style={{color: "var(--Main-color)", fontFamily: "var(--Main-font)"}}>Turnstile</span>, cette solution proposée par Cloudflare est respectueuse de votre vie privée. Turnstile est un produit qui est en accord avec la loi en vigueur en matière de protection des données personnelles (RGPD).</p>
                        <p style={{marginTop:"20px"}}>Nous utilisons également Matomo pour assurer le suivi des visites sur notre site, cette solution auto hébergée de <span style={{color: "var(--Main-color)", fontFamily: "var(--Main-font)"}}>Matomo</span> est configurée pour respecter la loi en vigueur en matière de protection des données personnelles (RGPD) et ne nous permet pas d'identifier les visiteurs.</p>
                        <p style={{marginTop:"20px"}}>Lorsque nous utilisons l'expression « Informations personnelles » dans la présente Politique de confidentialité, nous faisons allusion à la fois aux Informations sur l'appareil et aux Informations sur la demande de contact.</p>
                        <p style={{color: "var(--Main-color)", marginTop: "100px"}}>COMMENT UTILISONS-NOUS VOS INFORMATIONS PERSONNELLES?</p>
                        <div className="textDecorationBar"> </div>
                        <p>En règle générale, nous utilisons les informations de demande de contact que nous recueillons pour traiter toute demande passée par le biais du Site. En outre, nous utilisons ces informations de demande de contact pour communiquer avec vous.</p>
                    </div>
                </div>
            <Footer/>
        </div>
    );
};

export default privacyPolice;