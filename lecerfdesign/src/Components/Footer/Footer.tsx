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
                            <Link href="https://instagram.com/lecerf_design?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr">
                                <FaInstagram />
                            </Link>
                            <Link href="https://www.linkedin.com/in/thomas-lecerf-80a197224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                                <ImLinkedin2 />
                            </Link>
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