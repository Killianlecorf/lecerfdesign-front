import React from 'react';
import './_FormContact.scss'
import Image from 'next/image';
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import Link from 'next/link';
import Button from '../UI-kit/Button/Button';

const FormContact = () => {
    return (
        <div className='FormContact'>
            <div className="FormContactSize">
                <div className="FormContactContent">
                    <Image src="/Assets/Img/lecerfdesign_logo.svg" alt='Logo Lecerf design' width={426} height={103}/>
                    <div className="informationContactContent">
                        <div>
                            <h2>ROUEN</h2>
                        </div>
                        <div className="localisationContent">
                            <FaLocationDot /> <div className=""><p>63 Rue Louis Poterat, Rouen</p></div>
                        </div>
                        <div className="localisationContent">
                            <BsFillTelephoneFill /><div className=""><p>+33 16 63 07 49</p></div>
                        </div>
                        <div className="localisationContent">
                            <GrMail /><div className=""><p>thomas.loupkas@gmail.com</p></div>
                        </div>
                    </div>
                    <div className="FormulaireContact">
                        <input type="text" placeholder='Prénom*' required/>
                        <input type="text" placeholder='Nom*' required/>
                        <input type="phone" placeholder='Téléphone' />
                        <input type="mail" placeholder='Adresse mail*' required/>
                        <input type="text" className='subjectInput' placeholder='Sujet*' required/>
                        <textarea name="message" placeholder='Votre Message*' required></textarea>
                        <div className="rgpdCheckbox">
                            <p><input type="checkbox" className='checkboxInput' />J&apos;accepte que ces données soient recueillies par LECERF DESIGN afin de prendre mon contact pour répondre à mes questions ou à ma candidature. Pour révoquer ce consentement, veuillez consulter la <span style={{color: "var(--Main-color)"}}><Link href="/privacypolicy">politique de confidentialité.*</Link></span></p>
                        </div>
                        <div className="ButtonContactContent">
                            <Button ButtonContent='ENVOYER'  ButtonClassName='Button'/>
                        </div>
                    </div>
                </div>
            </div>
            <Image src="Assets/Img/background_contact.svg" className='imgbackgroundContact' width={1076} height={684}  alt='Fond Contact'/>
        </div>
    );
};

export default FormContact;