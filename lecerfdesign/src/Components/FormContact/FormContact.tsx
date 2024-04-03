"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import './_FormContact.scss'
import Image from 'next/image';
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import Link from 'next/link';
import Button from '../UI-kit/Button/Button';
import FetchAPI from "@/Utils/requestApi";
import { isValidEmail } from "@/Utils/verificationMail";

interface FormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    subject: string;
    text: string;
    checkbox: boolean;
}

interface Mail{
    subject:string;
    text:string;
}

const FormContact = () => {
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        subject: '',
        text: '',
        checkbox: false
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const nameInput = event.target.name;
        const userText = event.target.value;
        setFormData(prevState => ({
          ...prevState,
          [nameInput]: nameInput === "checkbox" ? !prevState.checkbox : userText
        }));
    };

    const submitForm = async () => {

        if (!formData.checkbox) {
            return(
                setErrorMessage('Veuillez accepter les conditions d\'utilisations')
            )
        }

        const mailContent: Mail= {
            subject: formData.subject,
            text: `NOM : ${formData.firstName} - ${formData.lastName} \nNuméro de téléphone : ${formData.phone}\nEmail : ${formData.email}\n\n${formData.text}`
        }

        if (!formData.email || !formData.firstName || !formData.lastName|| !formData.subject || !formData.text) {
            return setErrorMessage('Veuillez remplir les champs obligatoires')
        }

        if (!isValidEmail(formData.email)) {
            return setErrorMessage("Veuillez saisir un mail valide")
        }

        try {
            await FetchAPI("/service/send-email", "POST", mailContent);
            setErrorMessage("Message bien envoyé !")
            setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    subject: '',
                    text: '',
                    checkbox: false
                })
        } catch (error: any) {
            console.error(error);
            setErrorMessage('Une erreur est survenue, veuillez réessayer plus tard');
        }
    };

    const displayErrorMessage = () => {
        if ( errorMessage.trim() === "Message bien envoyé !") {
            return <p style={{color: "green"}}>{errorMessage}</p>
        }else{
            return <p style={{color: "red"}}>{errorMessage}</p>
        }
    }

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
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='Prénom*' required/>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Nom*' required/>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder='Téléphone' />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Adresse mail*' required/>
                        <input type="text" name="subject" value={formData.subject} onChange={handleChange} className='subjectInput' placeholder='Sujet*' required/>
                        <textarea name="text" value={formData.text} onChange={handleChange} placeholder='Votre Message*' required></textarea>
                        <div className="rgpdCheckbox">
                            <label>
                                <input type="checkbox" name="checkbox" onChange={handleChange} checked={formData.checkbox} className='checkboxInput' />
                                J&apos;accepte que ces données soient recueillies par LECERF DESIGN afin de prendre mon contact pour répondre à mes questions ou à ma candidature. Pour révoquer ce consentement, veuillez consulter la 
                                <span style={{color: "var(--Main-color)"}}>
                                    <Link href="/privacypolicy"> politique de confidentialité.*</Link>
                                </span>
                            </label>
                        </div>
                        <div className="errormessage">
                            {displayErrorMessage()}
                        </div>
                        <div className="ButtonContactContent">
                            <Button ButtonContent='ENVOYER'  ButtonClassName='Button' ButtonClick={submitForm}/>
                        </div>
                    </div>
                </div>
            </div>
            <Image src="Assets/Img/background_contact.svg" className='imgbackgroundContact' width={1076} height={684}  alt='Fond Contact'/>
        </div>
    );
};


export default FormContact;