import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import React from 'react';
import '../../src/style/Pages/privacyPolicy/_page.scss'

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
                        <p>Lorsque vous vous rendez sur le Site, nous recueillons automatiquement certaines informations concernant votre appareil, notamment des informations sur votre navigateur web, votre fuseau horaire, votre système d&apos;exploitation. En outre, lorsque vous parcourez le Site, nous recueillons des informations sur les pages web individuelless que vous consultez, les sites web ou les termes de recherche qui vous ont permis d&apos;arriver sur le Site, ainsi que des informations sur la manière dont vous interagissez avec le Site. Nous désignons ces informations collectées automatiquement sous l&apos;appellation « Informations sur l&apos;appareil ».</p>
                        <p style={{margin: '20px 0 20px 0 '}}>Nous recueillons les Informations sur l&apos;appareil à l&apos;aide des technologies suivantes</p>
                        <p>Les « fichiers journaux » suivent l&apos;activité du Site et recueillent des données telles que votre adresse IP, le type de navigateur que vous utilisez, votre fournisseur d&apos;accès Internet, vos pages référentes et de sortie, et vos données d&apos;horodatage (date et heure). Ces fichiers journaux ne sont pas exploités à des fins de traçage ni de ciblage publicitaire et ne sont pas distribués à des tiers. Enfin nous pouvons être amenés à analyser le parcours utilisateur mené sur Le Site afin d&apos;améliorer votre expérience utilisateur, à l&apos;aide d&apos;une solution auto-hébergée de OpenRelay. Ces données ne sont ni confiées, ni revendues à des tiers et ne sont pas utilisées à des fins de ciblage publicitaire. Les données saisies dans le cadre de votre demande de contact sont anonymisées à cette étape.
                        Par ailleurs, lorsque vous effectuez ou tentez d&apos;effectuer une demande de contact par le biais du Site, nous recueillons certaines informations vous concernant, notamment votre nom, votre adresse courriel et votre numéro de téléphone. Ces informations collectées automatiquement sont désignées par l&apos;ppellation « Informations sur la demande de contact ».</p>
                        <p style={{marginTop:"20px"}}>Pour nous protéger du spam et des robots nous utilisons <span style={{color: "var(--Main-color)", fontFamily: "var(--Main-font)"}}>Turnstile</span>, cette solution proposée par Cloudflare est respectueuse de votre vie privée. Turnstile est un produit qui est en accord avec la loi en vigueur en matière de protection des données personnelles (RGPD).</p>
                        <p style={{marginTop:"20px"}}>Nous utilisons également Matomo pour assurer le suivi des visites sur notre site, cette solution auto hébergée de <span style={{color: "var(--Main-color)", fontFamily: "var(--Main-font)"}}>Matomo</span> est configurée pour respecter la loi en vigueur en matière de protection des données personnelles (RGPD) et ne nous permet pas d&apos;identifier les visiteurs.</p>
                        <p style={{marginTop:"20px"}}>Lorsque nous utilisons l&apos;expression « Informations personnelles » dans la présente Politique de confidentialité, nous faisons allusion à la fois aux Informations sur l&apos;appareil et aux Informations sur la demande de contact.</p>
                        <p style={{color: "var(--Main-color)", marginTop: "100px"}}>COMMENT UTILISONS-NOUS VOS INFORMATIONS PERSONNELLES?</p>
                        <div className="textDecorationBar"> </div>
                        <p>En règle générale, nous utilisons les informations de demande de contact que nous recueillons pour traiter toute demande passée par le biais du Site. En outre, nous utilisons ces informations de demande de contact pour communiquer avec vous.</p>
                        <p style={{color: "var(--Main-color)", marginTop: "100px"}}>PARTAGE DE VOS INFORMATIONS PERSONNELLES</p>
                        <div className="textDecorationBar"> </div>
                        <p>Nous ne partageons vos informations personnelles qu&apos;avec Office 365 qui nous aide à les utiliser afin de vous envoyer des courriels.</p>
                        <p>Enfin, il se peut que nous partagions aussi vos informations personnelles pour respecter les lois et réglementations applicables, répondre à une assignation, à un mandat de perquisition ou à toute autre demande légale de renseignements que nous recevons, ou pour protéger nos droits.</p>
                        <p style={{color: "var(--Main-color)", marginTop: "100px"}}>NE PAS SUIVRE</p>
                        <div className="textDecorationBar"> </div>
                        <p>Veuillez noter que nous modifions la collecte de données de notre Site et nos pratiques d&apos;utilisation lorsque nous détectons un signal « Ne pas suivre » sur votre navigateur.</p>
                        <p style={{color: "var(--Main-color)", marginTop: "100px"}}>VOS DROITS</p>
                        <div className="textDecorationBar"> </div>
                        <p>Si vous êtes résident(e) européen(ne), vous disposez d&apos;un droit d&apos;accès aux informations personnelles que nous détenons à votre sujet et vous pouvez demander à ce qu&apos;elles soient corrigées, mises à jour ou supprimées. Si vous souhaitez exercer ce droit, veuillez nous contacter au moyen des coordonnées précisées ci-dessous. Par ailleurs, si vous êtes résident(e) européen(ne), notez que nous traitons vos informations dans le but de remplir nos obligations contractuelles à votre égard (par exemple si vous effectuez une demande de contact sur le site) ou de poursuivre nos intérêts commerciaux légitimes, énumérés ci-dessus.</p>
                        <p style={{color: "var(--Main-color)", marginTop: "100px"}}>RÉTENTION DES DONNÉES</p>
                        <div className="textDecorationBar"> </div>
                        <p>Lorsque vous effectuez une demande de contact par l&apos;intermédiaire du Site, nous conservons les informations sur votre demande dans nos dossiers, pendant une période de 36 mois dans le but de vous informer de nos offres et de nos services. Nous pouvons également conserver certaines de vos informations personnelles pour des raisons administratives, juridiques ou de sécurité jusqu&apos;au jour du traitement de votre demande.</p>
                        <p style={{color: "var(--Main-color)", marginTop: "100px"}}>CHANGEMENTS</p>
                        <div className="textDecorationBar"> </div>
                        <p>Nous pouvons être amenés à modifier la présente politique de confidentialité de temps à autre afin d&apos;y refléter, par exemple, les changements apportés à nos pratiques ou pour d&apos;autres motifs opérationnels, juridiques ou réglementaires.</p>
                        <p style={{color: "var(--Main-color)", marginTop: "100px"}}>NOUS CONTACTER</p>
                        <div className="textDecorationBar"> </div>
                        <p>Pour en savoir plus sur nos pratiques de confidentialité, si vous avez des questions ou si vous souhaitez déposer une réclamation, veuillez nous contacter par e-mail à lecerfdesign@gmail.com , ou par courrier à l&apos;adresse suivante :</p>
                        <p style={{marginTop:"40px"}}>LECERF DESIGN - 63 Rue Louis Poterat, Rouen</p>
                    </div>
                </div>
            <Footer/>
        </div>
    );
};

export default privacyPolice;