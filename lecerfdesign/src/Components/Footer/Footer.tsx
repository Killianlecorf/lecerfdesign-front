import React from 'react';
import '../Footer/_footer.scss'
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import lecerfLogo from "../../../public/Assets/Img/lecerf_design_logo.svg"
import Button from '../UI-kit/Button/Button';



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
                        <Button ButtonContent='Envoyer un mail' ButtonClassName='ContactButtonArrow'/>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="CopyContent">

        </div>
        </>
    );
};

export default Footer;