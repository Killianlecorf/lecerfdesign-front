import React from 'react';
import '../Footer/_footer.scss'
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import lecerfLogo from "../../../public/Assets/Img/lecerf_design_logo.svg"
import Button from '../UI-kit/Button/Button';
import Link from 'next/link';



const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="footerContent">
                    <div className="footerLogo">
                        <Image src={lecerfLogo} alt='Information de contact'/>
                    </div>
                    <div className="footerInstagram">
                        <div className="logoContent">
                            <FaInstagram />
                            <ImLinkedin2 />
                        </div>
                    </div>
                    <div className="contactButton">
                        <div className="contactButtonContent">
                            <p className='titleContact'>Contactez-nous</p>
                            <Link href="/contact">
                                <Button ButtonContent='Envoyer un mail' ButtonClassName='ContactButtonArrow'/>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="CopyContent">
                <div className="copyText">
                    <p>Copyrights 2023 Lecerf Design. / Tous droits réservés</p>
                </div>
                <div className="mentionLegal">
                    <ul>
                        <li>Plan du site</li>
                        <li>Gestion des cookies</li>
                        <Link href='legal'>
                            <li>Mentions légales</li>
                        </Link>
                        <Link href="/privacypolicy">
                            <li>Politique de confidentialité</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Footer;